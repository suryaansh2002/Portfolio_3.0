import React from "react";
import "./About.css";
import me from "../../Assets/me.jpeg";
import {GrDocumentDownload} from 'react-icons/gr'
import resume from '../../Assets/SuryaanshRathinam_Resume.pdf'
export default function About() {
  return (
    <>
      <div className="about_main">
        <div className="about_header" id="about">
          Who am I?
        </div>
        <div className="left">
          <img src={me} className="me" />
        </div>
        <div className="leftBg"></div>
        <div className="about_txt">
          I am Suryaansh Rathinam, a Computer Science Undergrad at Manipal
          Institue of Technology.
          <br /> Being a Full Stack Developer with experience working with a
          variety of techstacks, tools and frameworks, on a variety of projects,
          I am always on the lookout to explore more, learn more and develop my
          skill set.
          <br />
          Looking forward to working on projects, collaborating, and learning
          with anyone with similar interests.
          <br /> Do feel free to reach out to me if you feel you've got
          something that would interest me or if I can be of any help to you.<br/>
          <a href={resume} download><button className="download">Resume <GrDocumentDownload className="d_icon"/></button></a>
        </div>
      </div>
    </>
  );
}
