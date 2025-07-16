import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 let [counter,setCounter]=useState(5)
//  let counter=5
const addvalue =()=>{
  if(counter===20)return ;
  console.log("click to add value by 1");
  // counter=counter+1;
  setCounter(counter =>counter+1)
  setCounter(counter =>counter+1)
  setCounter(counter =>counter+1)
  setCounter(counter =>counter+1)

}
const substractValue=()=>{
  if(counter===0)return ;
  console.log("click to substract value by 1");
  counter=counter-1;
  setCounter(counter)

}
  return (
    <>
      <h1>chai aur react</h1>
      <h2>count value :{counter}</h2>
      <button
      onClick={addvalue}>Add value with 1</button>
      <button onClick={substractValue}>subtract value with 1</button>
    </>
  )
}

export default App
