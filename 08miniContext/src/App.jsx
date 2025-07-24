import Login from "./components/Login"
import Profile from "./components/Profile"
import { useState } from "react"
import UserContext from "./context/UserContext"
import UserContextProvider from "./context/UserContextProvider"
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
    <UserContextProvider>
      <h1></h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  )
}

export default App
