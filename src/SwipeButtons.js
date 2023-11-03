import React from 'react'
import './SwipeButtons.css';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const SwipeButtons= () => {
  return (
    <div className='SwipeButtons'>
      <IconButton>  
        <CloseIcon className='SwipeButtons__left' fontSize='large'/>
      </IconButton>
      <IconButton>  
        <ReplayIcon className='SwipeButtons__repeat' fontSize='large'/>
      </IconButton>
      <IconButton>  
        <FavoriteIcon className='SwipeButtons__right' fontSize='large'/>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;