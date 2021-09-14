import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import CreatePostForm from '../../components/forms/CreatePostForm'
import UserRoute from '../../components/routes/UserRoute'
import { UserContext } from '../../context'

const Home = () => {
  const [state, setState] = useContext(UserContext)
  // state
  const [content, setContent] = useState('')
  // Route
  const router = useRouter()

  const postSubmit = async (e) => {
    e.preventDefault()
    // console.log('post=>', content)
    try {
      const { data } = await axios.post('/create-post', { content })
      console.log('create post response => ', data)
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Post created')
        setContent('')
      }
    } catch (err) {
      console.log(err)
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
            />
          </div>
          <div className='col-md-4'>{/* <Sidebar /> */} sidebar</div>
        </div>
      </div>
    </UserRoute>
  )
}

export default Home
