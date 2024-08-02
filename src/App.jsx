import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import "./firebase"
import Dashboard from './page/Dashboard'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const App = () => {

  const [login, setLogin] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(()=> {
    const auth = getAuth()
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setLogin(true)
        setIsloading(false);
        return; 
      }

      setIsloading(false)
      setLogin(false)

    })
  }, [])



  if(isLoading) {
    return (

      <div className='w-screen h-screen flex items-center justify-center'>
        loding..... 💫💫💨
      </div>

    )
  }

  return (
    <>
    { 
      login ? (

        <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='*' element={<Dashboard/>} />
        </Routes>

      ) : (
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<h1></h1>}/>
        </Routes>
      )
    }
    </>
  )
}

export default App