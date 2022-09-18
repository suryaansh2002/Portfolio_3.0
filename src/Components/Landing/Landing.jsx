import React from "react";
import "./Landing.css";
import $ from "jquery";
import main from "../../Assets/main.png";
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
          <div className="landing_main ">
            <img src={main} className="landing_profile" />
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
                  strings: [`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I AM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/> SURYAANSH`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <button className="btn_nav about_link">DOWN</button>
          </div>
  );
}
