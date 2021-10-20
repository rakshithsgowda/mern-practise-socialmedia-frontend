import SyncOutLined from '@ant-design/icons/SyncOutlined'
// import { SyncOutlined } from '@ant-design/icons'

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
  page,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {profileUpdate && (
        <>
          <div className='form-group py-2'>
            <small>
              <label className='text-muted'>Username</label>
            </small>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Enter Your User Name'
            />
          </div>
          <div className='form-group py-2'>
            <small>
              <label className='text-muted'>about</label>
            </small>
            <input
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Write about yourself'
            />
          </div>
        </>
      )}

      {page !== 'login' && (
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
      )}

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

      {page !== 'login' && (
        <>
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
        </>
      )}

      <div className='form-group d-grid py-3'>
        <button
          disabled={
            page === 'login'
              ? !email || !password || loading
              : !name || !email || !secret || !password || loading
          }
          className='btn btn-primary btn-lg'
        >
          {loading ? <SyncOutLined spin className='py-1' /> : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default AuthForm
