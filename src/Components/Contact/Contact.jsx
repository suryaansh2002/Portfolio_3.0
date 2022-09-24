import React from 'react'
import './Contact.css'
import bitmoji from "../../Assets/Skills/bitmoji.png";

export default function Contact() {
  return (
    <div className='contact_main'>
    <div className='contact_header' id='contact'>
    Get In Touch With Me
    </div>
    <img src={bitmoji} className='bitmoji'/>
    </div>

  )
}
