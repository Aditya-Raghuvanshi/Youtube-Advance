import React from 'react'


const LiveChat = ({name,message}) => {
    
  return (
    <div className='flex items-center p-2 shadow-sm'>
      <img className='h-8 cursor-pointer' src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="profile" />
      <span className='font-bold px-2'>{name}</span>
      <span className='py-2'>{message}</span>
    </div>
  )
}

export default LiveChat
