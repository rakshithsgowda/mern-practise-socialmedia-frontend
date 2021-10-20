import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context'
import UserRoute from '../../components/routes/UserRoute'
import PostForm from '../../components/forms/PostForm'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import PostList from '../../components/cards/PostList'
import People from '../../components/cards/People'

const Home = () => {
  const [state, setState] = useContext(UserContext)
  // state
  const [content, setContent] = useState('')
  const [image, setImage] = useState({})
  const [uploading, setUploading] = useState(false)
  // posts
  const [posts, setPosts] = useState([])
  // people
  const [people, setPeople] = useState([])

  // Route
  const router = useRouter()

  useEffect(() => {
    if (state && state.token) {
      fetchUserPosts()
      findPeople()
    }
  }, [state && state.token])

  const findPeople = async () => {
    try {
      const { data } = await axios.get('/find-people')
      setPeople(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get('/user-posts')
      setPosts(data)
      // console.log('user posts => ', data)
    } catch (error) {
      console.log(error)
    }
  }

  const postSubmit = async (e) => {
    e.preventDefault()
    // console.log('post=>', content)
    try {
      const { data } = await axios.post('/create-post', { content, image })
      // console.log('create post response => ', data)
      if (data.error) {
        toast.error(data.error)
      } else {
        fetchUserPosts()
        toast.success('Post created')
        setContent('')
        setImage({})
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleImage = async (e) => {
    const file = e.target.files[0]
    let formData = new FormData()
    formData.append('image', file)
    // console.log([...formData])
    setUploading(true)
    try {
      const { data } = await axios.post('/upload-image', formData)
      // console.log('uploaded image => ', data)
      setImage({
        url: data.url,
        public_id: data.public_id,
      })
      setUploading(false)
    } catch (err) {
      console.log(err)
      setUploading(false)
    }
  }

  const handleDelete = async (post) => {
    try {
      const answer = window.confirm('Are you sure ?')
      if (!answer) return
      const { data } = await axios.delete(`/delete-post/${post._id}`)
      toast.error('Post deleted')
      fetchUserPosts()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFollow = async (user) => {
    // console.log('add this user to follow list =>', person)
    try {
      const { data } = await axios.put('user-follow', { _id: user._id })
      console.log('handle follow response =>', data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserRoute>
      <div className='container-fluid'>
        <div className='row py-5 text-light bg-default-image'>
          <div className='col text-center'>
            <h1 className='display-1 text-center'>NewsFeed</h1>
          </div>
        </div>
        <div className='row py-3'>
          <div className='col-md-8'>
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
            <br />
            <PostList posts={posts} handleDelete={handleDelete} />
          </div>

          <div className='col-md-4'>
            <pre>
              <People people={people} handleFollow={handleFollow} />
            </pre>
          </div>
        </div>
      </div>
    </UserRoute>
  )
}

export default Home
