import React from 'react'
import './About.css'
import me from '../../Assets/me.jpeg';

export default function About() {
  return (
<>
<div className="about_main">
  <div className='about_header' id='about'>
    Who am I?
  </div>
  <div className='left'><img src={me} className='me'/></div>
</div>

</>  )
}
