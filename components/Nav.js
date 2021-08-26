import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../context'

const Nav = () => {
  const [state, setState] = useContext(UserContext)
  const router = useRouter()

  const logout = () => {
    // clear the storage
    window.localStorage.removeItem('auth')
    // clear the state using null
    setState(null)
    // send the user to login page
    router.push('/login')
  }

  return (
    <nav
      className='nav d-flex justify-content-between'
      style={{ backgroundColor: 'blue' }}
    >
      <Link href='/'>
        <a className='nav-link text-light logo '>FRNDKAMP</a>
      </Link>

      {state !== null ? (
        <>
          <Link href='/user/dashboard'>
            <a className='nav-link text-light'>
              {state && state.user && state.user.name}
            </a>
          </Link>

          <a onClick={logout} className='nav-link text-light'>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link href='/login'>
            <a className='nav-link text-light'>Login</a>
          </Link>

          <Link href='/register'>
            <a className='nav-link text-light'>Register</a>
          </Link>
        </>
      )}
    </nav>
  )
}

export default Nav
