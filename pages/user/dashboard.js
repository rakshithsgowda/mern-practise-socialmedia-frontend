import { useContext } from 'react'
import UserRoute from '../../components/routes/UserRoute'
import { UserContext } from '../../context'

const Home = () => {
  return (
    <UserRoute>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='display-1 text-center'>Dashboard page</h1>
          </div>
        </div>
      </div>
    </UserRoute>
  )
}

export default Home
