import { useContext } from 'react'
import CreatePostForm from '../../components/forms/CreatePostForm'
import UserRoute from '../../components/routes/UserRoute'
import { UserContext } from '../../context'

const Home = () => {
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
            <CreatePostForm />
          </div>
          <div className='col-md-4'>{/* <Sidebar /> */} sidebar</div>
        </div>
      </div>
    </UserRoute>
  )
}

export default Home
