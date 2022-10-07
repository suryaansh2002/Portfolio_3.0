import React from "react";
import "./About.css";
import me from "../../Assets/me.jpeg";
import {MdSimCardDownload} from 'react-icons/md'
import resume from '../../Assets/SuryaanshRathinam_Resume.pdf'
export default function About() {
  return (
    <>
      <div className="about_main">
        <div className="about_header" id="about">
          <span className="letter">W</span>
          <span className="letter">h</span>
          <span className="letter">o</span>
          <span className="letter"> </span>
          <span className="letter">a</span>
          <span className="letter">m </span>
          <span className="letter"> </span>
          <span className="letter">I </span>
          <span className="letter">? </span>
        </div>
        <div className="left">
          <img src={me} className="me" />
          <div className="leftBg"></div>
        </div>
        <div className="about_txt">
          I am Suryaansh Rathinam, a Computer Science Undergrad at Manipal
          Institue of Technology.
          <br /> Being a Full Stack Developer with experience working with a
          variety of techstacks, tools and frameworks, on a variety of projects,
          I am always on the lookout to explore more, learn more and develop my
          skill set.
          <br /> Do feel free to reach out to me if you feel you've got
          something that would interest me or if I can be of any help to you.<br/>
          <a href={resume} download><button className="download">Resume <MdSimCardDownload className="d_icon"/></button></a>
        </div>
      </div>
    </>
  );
}
