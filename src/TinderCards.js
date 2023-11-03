import React,{useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './Tindercards.css';

function TinderCards(){
  const[people, setPeople]= useState([
    {
      name :'jack',
      url : 'https://images2.thanhnien.vn/zoom/700_438/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg'
    },
   {
     name: 'k-icm',
     url: 'https://afamilycdn.com/150157425591193600/2020/7/13/screen-shot-2020-07-13-at-121151-pm-15946171784111978947123.png'
   },
   {
    name: 'Messi',
    url: 'https://avatarfiles.alphacoders.com/187/187663.jpg'
  },
  ]);
  useEffect(() => {},[]);
  return (
  <div>
     <div className='tinderCards__cardContainer'>
     {people.map((person)=>(
      <TinderCard 
        className='swipe' 
        key={person.name}
        preventSwipe={['up','down']}
      >
        <div 
          className="card" 
          style={{backgroundImage: `url(${person.url})`}}
        >
          <h3>{person.name}</h3>
        </div>
      </TinderCard>
     ))}
    </div>
  </div>
  );
}

export default TinderCards;