import React from "react";
import "./Contact.css";
import bitmoji from "../../Assets/Skills/bitmoji.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsGithub } from "react-icons/bs";
export default function Contact() {
  return (
    <div className="contact_main">
      <div className="contact_header" id="contact">
        Get In Touch With Me
      </div>
      <div className="logo_C">
        <AiOutlineInstagram className="logo" />
        <CgMail className="logo" />
        <BsMedium className="logo" />
      <FaLinkedinIn className="logo" />
        <BsGithub className="logo" />
      </div>
      <div className="c_text">I'd love to hear from you! </div>
      <img src={bitmoji} className="bitmoji" />
    </div>
  );
}
