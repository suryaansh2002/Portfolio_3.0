import React, { useCallback, useState, useEffect } from "react";
import "./Moneyflo.css";
import { loadFull } from "tsparticles";
import moneyflo from "../../Assets/Work/moneyflo.png";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { AiFillCalendar, AiOutlineLink } from "react-icons/ai";
import Header from "../../Components/Header/Header";

export default function Moneyflo() {
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
  useEffect(() => {
    if (localStorage.getItem("theme") == "true") {
      setLight(true);
    }
  }, []);
  return (
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
      <div className="r_title">Moneyflo</div>
      <div className="work_dur">
        <AiFillCalendar className="work_calender" />
        Mar '23 - Present
      </div>

      <div className="rc1">
        <div className="rc1_left">
          <div className="work_img_box_2">
            <div
              className="img_container"
              id={light ? "img_container_light" : null}
            >
              <img src={moneyflo} className="moneyflo_logo" />
            </div>
            <div
              className="img_cont_bg"
              id={light ? "img_cont_bg_light" : null}
            ></div>
          </div>
        </div>
        <div className="rc1_right">
          <div className="about_comp">About The Company</div>
          <div className="about_content">
            <p>
              Is a start up that is working on building a financial intelligence
              platform that cracks the code to e-commerce profitability. It
              unifies data across channels to give a single source of truth
              about unit economics automate reconciliation and optimize
              cashflowsm providing clients real-time access to their revenue,
              cash flow, profitability, and order-related data from all
              channels, unified on a single platform.
            </p>

            <a href="https://www.moneyflo.ai/" target={"_blank"}>
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
          <div className="mywork">My Work at Moneyflo</div>
          <p>
            During my tenure at Moneyflo as a <b>Full Stack Developer</b>, I
            have been an integral part of the team driving the platform's
            development. This journey has encompassed both frontend and backend
            responsibilities. I've dedicated efforts to enhancing the platform's
            UI/UX across multiple iterations, consistently introducing new
            features to elevate user experiences and deliver valuable insights.
            My involvement also extends to backend development, where I've been
            instrumental in constructing RestAPI endpoints and functionalities
            that seamlessly align with user interface features.
          </p>
        </div>
        <div className="rc2_right">
          <div className="skillsH">Tools and Technologies Used</div>
          <div className="skil_set">
            <div className="work_skill">NextJS</div>
            <div className="work_skill">Sass</div>
            <div className="work_skill">AntD</div>
            <div className="work_skill">FastAPI</div>
            <div className="work_skill">NestJS</div>
            <div className="work_skill">TypeORM</div>
            <div className="work_skill">Postgres</div>
            <div className="work_skill">AWS</div>

          </div>
        </div>
      </div>
    </div>
  );
}
