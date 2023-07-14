import React, { useCallback, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import AuthContext from './context/authContext'
export default function App() {
  const [isLogIn, setIsLogIn] = useState(false)
  const [token, setToken] = useState(false)
  const [userInfos, setUserInfos] = useState({})

  const login = useCallback((userInfos, token) => {
    setToken(token)
    setIsLogIn(true)
    setUserInfos(userInfos)
    localStorage.setItem('user', JSON.stringify({ token }))
  }, [])
  const logout = useCallback(() => {
    setToken(null)
    setUserInfos({})
    localStorage.removeItem('user')
  }, [])
  const router = useRoutes(routes)

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'))
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          'Authorization': `Bearer ${localStorageData.token}`
        },
      })
        .then(res => res.json())
        .then(userData => {
          setIsLogIn(true)
          setUserInfos(userData)
        })
    }
  }, [login])
  return (
    <div className='font-iransans'>
      <AuthContext.Provider value={{
        isLogIn,
        token,
        userInfos,
        login,
        logout,
      }}>
        {router}
      </AuthContext.Provider>
    </div>
  )
}
