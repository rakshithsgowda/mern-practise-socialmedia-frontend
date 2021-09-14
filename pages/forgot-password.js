import { Modal } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import router from 'next/router'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm'
import { UserContext } from '../context'

const ForgotPassword = () => {
  const [email, setEmail] = useState('rakshit.s.gowda@gmail.com')
  const [newPassword, setNewPassword] = useState('indiana123')
  const [secret, setSecret] = useState('red')
  const [ok, setOk] = useState(false)
  const [loading, setLoading] = useState(false)
  const [state] = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // check for  email,new password,secret working
    // console.log( email, password, secret);
    try {
      setLoading(true)
      const { data } = await axios.post(`/forgot-password`, {
        email,
        newPassword,
        secret,
      })
      console.log(`forgot password response data=>`, data)

      if (data.error) {
        toast.error(data.error)
        setLoading(false)
      }
      if (data.success) {
        setEmail('')
        setNewPassword('')
        setSecret('')
        setOk(true)
        setLoading(false)
      }
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
          <h1>Forgot Password </h1>
        </div>
      </div>

      {loading ? <h1>Loading</h1> : ''}

      <div className='row py-3'>
        <div className='col-md-6 offset-md-3'>
          <ForgotPasswordForm
            handleSubmit={handleSubmit}
            email={email}
            secret={secret}
            newPassword={newPassword}
            setEmail={setEmail}
            setNewPassword={setNewPassword}
            setSecret={setSecret}
            loading={loading}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Modal
            title='Congratulations!'
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>Congrats !! You have login with your new password</p>
            <Link href='/login'>
              <a className='btn btn-primary btn-sm'>Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
