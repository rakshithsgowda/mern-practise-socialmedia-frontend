import { Modal } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AuthForm from '../components/forms/AuthForm'

const Register = () => {
  const [name, setName] = useState('rakshith')
  const [email, setEmail] = useState('rakshit.s.gowda@gmail.com')
  const [password, setPassword] = useState('indiana123')
  const [secret, setSecret] = useState('red')
  const [ok, setOk] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // check for name ,email,password,secret working
    // console.log(name, email, password, secret);
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
          secret,
        }
      )
      setName('')
      setEmail('')
      setPassword('')
      setSecret('')
      setOk(data.ok)
      setLoading(false)
    } catch (err) {
      toast.error(err.response.data)
      setLoading(false)
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row py-5 bg-default-image text-light'>
        <div className='col text-center'>
          <h1>Register </h1>
        </div>
      </div>

      {loading ? <h1>Loading</h1> : ''}

      <div className='row py-3'>
        <div className='col-md-6 offset-md-3'>
          <AuthForm
            handleSubmit={handleSubmit}
            name={name}
            email={email}
            secret={secret}
            password={password}
            setEmail={setEmail}
            setName={setName}
            setPassword={setPassword}
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
            <p>You have successfully registered</p>
            <Link href='/login'>
              <a className='btn btn-primary btn-sm'>Login</a>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Register
