import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
      username:'ayush',
      age:21
  }
  let arr=[1,2,3,4,5];
  return (
    <>
      {/* <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>tailwind test</h1> */}
      {/* <!-- From Uiverse.io by Javierrocadev -->  */}
      {/* <Card username='Aman' downtext='good project'/> */}
      {/* <Card username='Ayush' downtext='very good projects'/> */}
      
      
      
    </>
  )
}

export default App
