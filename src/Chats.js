import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <div className='chats'>
        <Chat
            name = "Jack"
            message = "I give u 5 cu"
            timestamp = "5 years ago"
            profilePic = "https://images2.thanhnien.vn/zoom/700_438/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg"   
        />
        <Chat
            name = "Messi"
            message = "I am GOAT"
            timestamp = "2 month ago"
            profilePic = "https://avatarfiles.alphacoders.com/187/187663.jpg"   
        />
    </div>
  )
}

export default Chats