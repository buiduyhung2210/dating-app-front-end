import React from 'react'
import "./Chat.css"
import Avatar from '@mui/material/Avatar';
import { Link,useNavigate } from 'react-router-dom';

function Chat({name,message,profilePic,timestamp}) {
  return (
    <Link to = {`/chat/${name}`}>
    <div className='chat'>
        <Avatar className= "chat__image" src= {profilePic} />
        <div className='chat__detail'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
    </div>
    </Link>
  );
}

export default Chat;