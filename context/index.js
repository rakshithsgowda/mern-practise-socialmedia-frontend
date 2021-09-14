import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: '',
  })

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem('auth')))
  }, [])

  const router = useRouter()
  // Add a request interceptor
  axios.interceptors.response.use(
    function (response) {
      // Do something before request is sent
      return response
    },
    function (error) {
      // Do something with request error
      let res = error.response
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        setState(null)
        window.localStorage.removeItem('auth')
        router.push('/login')
      }
    }
  )

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
