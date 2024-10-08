import React, {useState} from "react";
import "./About.css";
import me from "../../Assets/me.png";
import me2 from "../../Assets/me2.png";
import { MdSimCardDownload } from "react-icons/md";
import Header from "../Header/Header";
import { HashLink } from "react-router-hash-link";
import AnimatedCursor from "react-animated-cursor";

export default function About(props) {
  const [light, setLight] = useState(false);

  return (
    <>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color={light ? "0,0,0" : "255, 255, 255"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="about_main" id={light ? "lightid" : null}>
      <Header light={light} setLight={setLight} />
        
        <div className="about_header" id="about">
          <span className="letter">A</span>
          <span className="letter">b</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">t</span>
          <span className="letter"> </span>
          <span className="letter">M </span>
          <span className="letter">e </span>
        </div>
     
        <div className="about_txt">
          Hello, I'm Suryaansh Rathinam, pursuing my Masters of Computing (AI Specialization) at the <i>National University of Singapore</i> <br/> <br/>
          Proficient as a Full Stack Developer and experience in ML Developement, I've constantly worked on developing my <b><HashLink to={'/#skills'}>skills</HashLink></b> by exploring various tech stacks, tools, and frameworks through diverse <b><HashLink to={'/projects'}>projects</HashLink></b>, fostering an unceasing desire for learning and growth.
          <br/>
          My journey extends beyond development; as I have delved into <b><HashLink to={'/#research'}>research</HashLink></b> in Artificial Intelligence and other domains as well. <br/>
          <br/>
        I am currently working on solidfying and enhancing my knowledge in the field of LLMs, and trying to keep up with the latest advancements in the AI space.
          I am also open to take up any freelance opportunities, and am on the search for internships for Summer (May-Jul) 2025.
          <br/>
           Please reach out to me if you're pursuing endeavors aligned with my interests
          or need a helping hand, feel free to <b><a href="'https://calendly.com/suryaansh2002/connect-with-suryaansh'" target="__blank">connect</a></b>. Let's join forces to
          explore new and exciting possibilities. <br />
       
        </div>
      </div>
    </>
  );
}
