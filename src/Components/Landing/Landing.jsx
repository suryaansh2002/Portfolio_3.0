import React from "react";
import "./Landing.css";
import main from "../../Assets/main.png";
import main_light from "../../Assets/main_light.png";

import Typewriter from "typewriter-effect";
import BackToTopButton from "../TopButton/TopButton";



import "./AboutNew.css";
import me from "../../Assets/me.png";
import me2 from "../../Assets/me2.png";
import { MdSimCardDownload } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";

import resume from "../../Assets/SuryaanshRathinam_Resume.pdf";

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
              `Hello, I AM SURYAANSH`,
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div>
      <div className="left">
          <img
            src={props.light ? me2 : me}
            className="me"
            id={props.light ? "light_me" : null}
          />
        </div>
        <div className="about_txt_new">
          <a href={resume} download>
            <button
              className="download"
              id={props.light ? "download_light" : null}
            >
              Download Resume{" "}
              <MdSimCardDownload
                className="d_icon"
                id={props.light ? "d_icon_light" : null}
              />
            </button>
          </a>

          <a href={'https://calendly.com/suryaansh2002/connect-with-suryaansh'} target="__blank">
            <button
              className="download"
              id={props.light ? "download_light" : null}
            >
              Get In Touch {" "}
              <IoIosCall
                className="d_icon"
                id={props.light ? "d_icon_light" : null}
              />
            </button>
          </a>

          <a href={'/about'}>
            <button
              className="download"
              id={props.light ? "download_light" : null}
            >
              More About Me{" "}
              <AiOutlineInfoCircle
                className="d_icon"
                id={props.light ? "d_icon_light" : null}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
