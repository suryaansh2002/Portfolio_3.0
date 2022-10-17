import React from "react";
import "./About.css";
import me from "../../Assets/me.png";
import { MdSimCardDownload } from "react-icons/md";
import resume from "../../Assets/SuryaanshRathinam_Resume.pdf";
export default function About(props) {
  return (
    <>
      <div className="about_main" id={props.light ? "lightid" : null}>
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
          <img src={me} className="me" id={props.light?'light_me':null} />
          <div className="leftBg" id={props.light ? 'light_imgBg':null}></div>
        </div>
        <div className="about_txt">
          I am Suryaansh Rathinam, a Computer Science Undergrad at Manipal
          Institue of Technology.
          <br /> Being a Full Stack Developer with experience working with a
          variety of techstacks, tools and frameworks, on a variety of projects,
          I am always on the lookout to explore more, learn more and develop my
          skill set.
          <br /> Do feel free to reach out to me if you feel you've got
          something that would interest me or if I can be of any help to you.
          <br />
          <a href={resume} download>
            <button
              className="download"
              id={props.light ? "download_light" : null}
            >
              Resume{" "}
              <MdSimCardDownload
                className="d_icon"
                id={props.light ? "d_icon_light" : null}
              />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
