import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AuthForm from '../components/forms/AuthForm'
import { UserContext } from '../context'

const Login = () => {
  const [email, setEmail] = useState('rakshit.s.gowda@gmail.com')
  const [password, setPassword] = useState('indiana123')
  const [loading, setLoading] = useState(false)

  const [state, setState] = useContext(UserContext)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // check for name ,email,password,secret working
    // console.log(name, email, password, secret);
    try {
      setLoading(true)
      const { data } = await axios.post(`/login`, {
        email,
        password,
      })
      // update context
      setState({
        user: data.user,
        token: data.token,
      })
      // also save in local storage
      window.localStorage.setItem('auth', JSON.stringify(data))
      // console.log(data)
      router.push('/')
    } catch (err) {
      toast.error(err.response.data)
      setLoading(false)
    }
  }

  if (state && state.token) router.push('/')

  return (
    <div className='container-fluid'>
      <div className='row py-5 bg-default-image text-light'>
        <div className='col text-center'>
          <h1>Login </h1>
        </div>
      </div>

      {/* {loading ? <h1>Loading</h1> : ''} */}

      <div className='row py-3'>
        <div className='col-md-6 offset-md-3'>
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            loading={loading}
            page='login'
          />
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <p className='text-center'>
            New user ?
            <Link href='/register'>
              <a> REGISTER</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
