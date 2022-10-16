import React, { useCallback, useState } from "react";
import "../Ridecell/Ridecell.css";
import { loadFull } from "tsparticles";
import { AiFillCalendar, AiOutlineLink } from "react-icons/ai";
import apt from "../../Assets/Work/apt2.png";
import "./Apt.css";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import Header from "../../Components/Header/Header";

export default function Apt() {
  const [light, setLight] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  var particlesObj;
  var width = window.innerWidth;
  if (width > 768) {
    particlesObj = {
      color: {
        value: light ? "#000000" : "#ffffff",
      },
      links: {
        color: light ? "#000000" : "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: false,
          area: 600,
        },
        value: 100,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
      },
    };
  } else {
    particlesObj = {
      color: {
        value: light ? "#000000" : "#ffffff",
      },
      nb: Math.round(Math.sqrt(width)),
      links: {
        color: light ? "#000000" : "#ffffff",
        distance: 50,
        enable: true,
        opacity: 0.25,
        width: 0.6,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: false,
          area: 0,
        },
        value: 50,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    };
  }

  return (
    <div>
      <div className="workex_main" id={light ? "lightid" : null}>
        <Header light={light} setLight={setLight} />
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

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            density_auto: true,
            background: {},
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: false,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: particlesObj,
            detectRetina: false,
          }}
        />
        <div className="r_title">Apice Tech</div>
        <div className="work_dur">
          <AiFillCalendar className="work_calender" />
          Apr '22 - Jul '22
        </div>

        <div className="rc1">
          <div className="rc1_left">
            <div className="work_img_box">
              <div className="img_container">
                <img src={apt} className="ridecell_logo" id="apt_logo" />
              </div>
              <div className="img_cont_bg"></div>
            </div>
            '
          </div>
          <div className="rc1_right">
            <div className="about_comp">About The Company</div>
            <div className="about_content">
              <p>
                Apice Tech is a start up based in New Delhi, India. They aim to
                simplify the Software Development Life Cycle (SDLC), with the
                help of their product KaizIQ, that is an end-to-end SDLC tool
                that integrates and automates all its phases into a single
                framework and helps the users monitor and generate real-time
                progress reports.
              </p>
              <p>
                It provides the users with a variety of features such as Project
                Management with real time reports and dashboards, custom CI/CD
                workflows and automation, and testing automation with a
                comprehensive testing suite.
              </p>
              <a href="https://apicetech.in/" target={"_blank"}>
                <button className="website_link">
                  <AiOutlineLink className="link_icon" />
                  Website
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="rc2">
          <div className="rc2_left">
            <div className="mywork">My Work at Apice Tech</div>
            <p>
              As one of the first Full Stack Software Engineering Interns at
              Apice Tech, I got to work closely with the founder's to understand
              their vision of the product and help bring it to life.
            </p>
            <p>
              I worked on both the frontend and server side of their product,
              employing the use of ReactJS and Java. I also got the experience
              of writing unit tests for various microservices used my the
              product.
            </p>
            <p></p>
          </div>
          <div className="rc2_right">
            <div className="skillsH">Tools and Technologies Used</div>
            <div className="skil_set">
              <div className="work_skill">ReactJS</div>
              <div className="work_skill">JavaScript</div>
              <div className="work_skill">CSS</div>
              <div className="work_skill">Java</div>
              <div className="work_skill">Spring Boot</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
