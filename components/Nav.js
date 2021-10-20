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
          <div className='dropdown'>
            <a
              className='btn dropdown-toggle text-light text-capitalize'
              role='button'
              id='dropdownMenuLink'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {state && state.user && state.user.name}
            </a>

            <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              <li>
                <Link href='/user/dashboard'>
                  <a
                    className={`nav-link dropdown-item  ${
                      current === '/user/dashboard' && 'active'
                    }`}
                  >
                    DashBoard
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/user/profile/update'>
                  <a
                    className={`nav-link dropdown-item  ${
                      current === '/user/profile/update' && 'active'
                    }`}
                  >
                    Profile
                  </a>
                </Link>
              </li>

              <li>
                <a onClick={logout} className='nav-link '>
                  Logout
                </a>
              </li>
            </ul>
          </div>
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
