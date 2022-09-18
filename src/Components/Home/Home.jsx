import React, { useEffect, useState } from 'react';
import './Home.css';
import $ from 'jquery'; 
import profile from '../../Assets/profile.png';

export default function Home() {
  const [anim,setAnim]=useState(false);
  $(document).ready(function() {
    console.log("here")
    $(".home_text").animate({
        marginTop:"30vh",
        opacity:1
    });
    $(".home_desc").animate({
      opacity:1
  });
});

  return (
    <div className='home_main'>
        <img src={profile} className='home_img'/>
        <div className='home_text'  id='name_text'>Hello, I am <span className='home_name'>Suryaansh</span></div>
        <div className='home_desc'>I'm a Full-Stack Developer, Tech Enthusiast and Computer Science Engineer in the making...</div>
    </div>
  )
}
