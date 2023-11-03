import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar'
import "./ChatScreen.css"

function ChatScreen() {
    const[input,setInput]=useState('');
    const [message,setMessage]=useState([
        {
            name: "Jack",
            image : "https://images2.thanhnien.vn/zoom/700_438/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg",
            message: "what's up?"
        },
        {
            name: "Jack",
            image : "https://images2.thanhnien.vn/zoom/700_438/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg",
            message: "How's it going ?"
        },
        {
            message: "Hi how are you?"
        },
    ]);
    const handleSend = (e) => {
        e.preventDefault();
        setMessage([...message,{message: input}]);
        setInput("");
    };
    
    return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>You matched with Jack on 1/1/18 </p>
        {message.map(message => (
            message.name ? (
            <div className='chatScreen__message'>
                <Avatar
                    className= "chatScreen__image"
                    alt= {message.name}
                    src={message.image}
                />
                <p className= "chatScreen__text">{message.message }</p>
            </div>
            ): (
            <div className='chatScreen__message'>
                <p className= "chatScreen__textUser">{message.message }</p>
            </div>      
            )
        ))}
            <form className='chatScreen__input'>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    className='chatScreen__inputField' 
                    placeholder="Type a message..." 
                />
                <button onClick={handleSend} type= 'submit' className='chatScreen__inputButton'>SEND</button>
            </form>
    </div>
    
  );
}

export default ChatScreen