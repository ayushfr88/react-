
import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
 import authService from './appwrite/auth'
 import {login,logout} from './store/authSlice'
 import {Header,Footer} from './components'
 import {Outlet} from 'react-router-dom'
function App() {
  //  console.log(import.meta.env.VITE_APPWRITE_URL)
  //  we are writing this becuase env file is defined unde process but it does not work always
  const [loading,setLoaing]=useState(true)
  const dispatch=useDispatch()
  useEffect(() => {
     authService.getCurrentUser()
     .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
     })
     .finally((()=>setLoaing(false)))
  }, [])
  
    return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
        TODO:   <Outlet/>
          </main>
          <Footer />
        </div>
      </div>
    ):null
}

export default App
