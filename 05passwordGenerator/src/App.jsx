import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [CharAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  // use ref hook
  const passwordref=useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMONOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed)str+="0123456789"
    if (CharAllowed)str+="!@#$%^&*_-+=[]{}~`"
    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
   
  },[length,numberAllowed,CharAllowed,setPassword])
   const copypasswordtoClipBoard=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
   },[password])
   useEffect(()=>{
      passwordGenerator()
    },[CharAllowed,numberAllowed,length,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '>
     <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordref}
       />
       <button className='outline-none bg-blue-700 text-white px-3  py-0.5 shrink-0 ' onClick={copypasswordtoClipBoard}>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e)=>{setLenght(e.target.value)}}/>
        <label>Length:{length}</label>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input 
        type="checkbox"
        defaultChecked={CharAllowed}
        id='charInput'
        onChange={()=>
          setCharAllowed((prev)=>!prev)
        }
        />
        <label htmlFor="charInput">character</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
