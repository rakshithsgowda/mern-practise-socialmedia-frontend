import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PostForm from '../../../components/forms/PostForm'
import UserRoute from '../../../components/routes/UserRoute'

const EditPost = () => {
  const [post, setPost] = useState({})
  // state
  const [content, setContent] = useState('')
  const [image, setImage] = useState({})
  const [uploading, setUploading] = useState(false)

  const router = useRouter()
  // console.log('router =>', router)
  const _id = router?.query?._id

  console.log(_id)

  useEffect(() => {
    if (_id) fetchPost()
  }, [_id])

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`)
      setPost(data)
      setContent(data.content)
      setImage(data.image)
    } catch (error) {
      console.log(error)
    }
  }

  const postSubmit = async (e) => {
    e.preventDefault()
    console.log('Submit post to update', content, image)

    try {
      const { data } = await axios.put(`/update-post/${_id}`, {
        content,
        image,
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('post created')
        router.push('user/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleImage = async (e) => {
    const file = e.target.files[0]
    let formData = new FormData()
    formData.append('image', file)
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
          <div className='col-md-8 offset-md-2'>
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />
          </div>
        </div>
      </div>
    </UserRoute>
  )
}

export default EditPost
