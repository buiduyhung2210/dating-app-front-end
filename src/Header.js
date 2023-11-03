import React from 'react';
import './Header.css';
import { Link,useNavigate } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header({backButton}) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {backButton ?(
        <IconButton onClick= {() => navigate(backButton, { replace: true })}>
        <ArrowBackIosIcon fontSize='large' className='header__icon'/>
      </IconButton>
      ):(
        <IconButton>
          <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
      )
      }   
     <Link to="/">
     <img 
        className="header__logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt="tinder logo"
     />
     </Link>
     <Link to="/chat">
       <IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
       </IconButton>
     </Link>
    </div>
  )
}

export default Header