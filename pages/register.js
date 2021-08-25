import { Modal } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secret, setSecret] = useState('')
  const [ok, setOk] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // check for name ,email,password,secret working
    // console.log(name, email, password, secret);
    try {
      const { data } = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
        secret,
      })
      setOk(data.ok)
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row py-5 bg-secondary text-light'>
        <div className='col text-center'>
          <h1>Register </h1>
        </div>
      </div>
      <div className='row py-3'>
        <div className='col-md-6 offset-md-3'>
          <form onSubmit={handleSubmit}>
            <div className='form-group py-2'>
              <small>
                <label className='text-muted'>Name</label>
              </small>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter Your Name'
              />
            </div>

            <div className='form-group py-2'>
              <small>
                <label className='text-muted'>Email address </label>
              </small>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
                placeholder='Enter Your Email'
              />
            </div>

            <div className='form-group py-2'>
              <small>
                <label className='text-muted'>Your Password</label>
              </small>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='true'
                type='password'
                className='form-control'
                placeholder='Enter Password'
              />
            </div>

            <div className='form-group py-2'>
              <small>
                <label className='text-muted'>Pick a question</label>
              </small>
              <select className='form-control'>
                <option>What is your favourite color ?</option>
                <option>What is your best friend's name ?</option>
                <option>In which city were you born ?</option>
              </select>
              <small className='form-text text-muted'>
                You can use this to reset your password if forgottten.
              </small>
            </div>
            <div className='form-group py-2'>
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type='text'
                placeholder='Write your Answer here'
                className='form-control'
              />
            </div>
            <div className='form-group d-grid py-3'>
              <button className='btn btn-primary btn-lg'>Submit</button>
            </div>
          </form>
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
