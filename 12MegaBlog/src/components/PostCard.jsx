import React from 'react'
import authService from '../appwrite/auth'
import {Link} from 'react-router-dom'


function PostCard({
    $id, title , featuredImage ,
}) {
  return (
   <Link to={`/post/${$id}`}>
    <div className='w-full bg-gray-500 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={authServiceService.getFilePreview(featuredImage)} alt={title} className=''/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
   </Link>
  )
}

export default PostCard