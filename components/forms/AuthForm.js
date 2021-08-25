import SyncOutLined from '@ant-design/icons'

const AuthForm = ({
  handleSubmit,
  name,
  email,
  secret,
  password,
  setName,
  setEmail,
  setPassword,
  setSecret,
  loading,
}) => {
  return (
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
        <button
          disabled={!name || !email || !secret || !password}
          className='btn btn-primary btn-lg'
        >
          {loading ? <SyncOutLined spin className='py-1' /> : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default AuthForm
