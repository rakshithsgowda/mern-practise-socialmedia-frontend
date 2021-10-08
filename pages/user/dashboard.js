import axios from 'axios'
import { useRouter, userRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PostList from '../../components/cards/PostList'
import CreatePostForm from '../../components/forms/CreatePostForm'
import UserRoute from '../../components/routes/UserRoute'
import { UserContext } from '../../context'

const Home = () => {
  const [state, setState] = useContext(UserContext)
  // state
  const [content, setContent] = useState('')
  const [image, setImage] = useState({})
  const [uploading, setUploading] = useState(false)
  // posts
  const [posts, setPosts] = useState([])
  // Route
  const router = useRouter()

  useEffect(() => {
    if (state && state.token) fetchUserPosts()
  }, [state && state.token])

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
    // console.log(file)
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
            <CreatePostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
            <br />
            <PostList posts={posts} />
          </div>

          {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

          <div className='col-md-4'>{/* <Sidebar /> */} sidebar</div>
        </div>
      </div>
    </UserRoute>
  )
}

export default Home
