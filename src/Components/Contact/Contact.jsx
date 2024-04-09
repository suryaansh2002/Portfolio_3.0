import React from "react";
import "./Contact.css";
import bitmoji from "../../Assets/Skills/bitmoji.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsGithub } from "react-icons/bs";
export default function Contact(props) {
  return (
    <div className="contact_main" id={props.light ? "lightid" : null}>
      <div className="contact_header" id="contact">
        Get In Touch With Me
      </div>
      <div className="logo_C" id={props.light ? "logo_light" : null}>
        <a href="https://leetcode.com/suryaansh28/" target="__blank">
          <SiLeetcode className="logo" />
        </a>
        <a href="mailto:suryaansh2002@gmail.com">
          <CgMail className="logo" />
        </a>
        <a href="https://suryaansh2002.medium.com/" target={"__blank"}>
          <BsMedium className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/"
          target={"__blank"}
        >
          <FaLinkedinIn className="logo" />
        </a>
        <a href="https://github.com/suryaansh2002/" target={"__blank"}>
          <BsGithub className="logo" />
        </a>
      </div>
      <div className="c_text">I'd love to hear from you! </div>
      <img src={bitmoji} className="bitmoji" />
    </div>
  );
}
