import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context'

const Nav = () => {
  const [state, setState] = useContext(UserContext)
  const [current, setCurrent] = useState('')

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname)
  }, [process.browser && window.location.pathname])
  // console.log(`current => ${current}`)

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
        <a
          className={`nav-link text-light logo ${current === '/' && 'active'}`}
        >
          FRNDKAMP
        </a>
      </Link>

      {state !== null ? (
        <>
          <Link href='/user/dashboard'>
            <a
              className={`nav-link text-light ${
                current === '/user/dashboard' && 'active'
              }`}
            >
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
            <a
              className={`nav-link text-light ${
                current === '/login' && 'active'
              }`}
            >
              Login
            </a>
            {/* <a className='nav-link text-light'>Login</a> */}
          </Link>

          <Link href='/register'>
            <a
              className={`nav-link text-light ${
                current === '/register' && 'active'
              }`}
            >
              Register
            </a>
            {/* <a className='nav-link text-light'></a> */}
          </Link>
        </>
      )}
    </nav>
  )
}

export default Nav
