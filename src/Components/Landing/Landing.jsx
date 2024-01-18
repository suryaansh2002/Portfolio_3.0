import React from "react";
import "./Landing.css";
import main from "../../Assets/main.png";
import main_light from "../../Assets/main_light.png";

import Typewriter from "typewriter-effect";
import BackToTopButton from "../TopButton/TopButton";

export default function Landing(props) {
  return (
    <div className="landing_main" id={props.light ? "lightid" : null}>
      <BackToTopButton light={props.light} />
      <img src={props.light ? main_light : main} className="landing_profile" />
      <a
        href=""
        class="typewrite"
        className="landing_name"
        data-period="2000"
        data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
      >
        <span class="wrap"></span>
      </a>

      <div className="landing_name">
        <Typewriter
          options={{
            strings: [
              `&nbsp;Hello, <span style=""> I AM</span> &nbsp;<br/> SURYAANSH`,
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
