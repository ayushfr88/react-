import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=ture}){
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)
    useEffect(() => {
        // Todo:make it more easy : task
     if (authentication && authStatus!==authentication) {
        navigate("/login")
     }
     else if(!authentication && authStatus!==authentication){

     }
     setLoader(flase)
    }, [authStatus,navigate,authentication])
    
  return loader ? <h1>...Loading</h1> : <>{children}</>
}

