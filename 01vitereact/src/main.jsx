import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function myApp(){
  return(
    <div>
      <h1>cutom App</h1>
    </div>
  )
}
// const ReactElement= {
//     type:'a',
//     props: {
//         href :'https://www.google.com',
//         target:'_balnk'
//     },
//     children:'Click me to visit Google'
// }
const anotherUser="chai aur react"
const reactElement= React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit ',
    anotherUser,
    ' via google'
)
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>

)
createRoot(document.getElementById('root')).render(
  
   reactElement
 
)
