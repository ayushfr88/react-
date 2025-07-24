import React, { useContext } from "react"
import UserContext from "../context/UserContext"



function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div className="grid place-content-center">Please Login</div>
    return <div className="grid place-content-center ">Welcome {user.username}</div>
}

export default Profile