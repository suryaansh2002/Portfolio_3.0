import React, { useCallback, useState, useEffect } from "react";
import "./Santanet.css";
import { loadFull } from "tsparticles";
import santanet from "../../Assets/Work/santanet.png";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { AiFillCalendar, AiOutlineLink } from "react-icons/ai";
import Header from "../../Components/Header/Header";

export default function Santanet() {
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
        <div className="r_title">Santanet</div>
        <div className="work_dur">
          <AiFillCalendar className="work_calender" />
          Apr '22 - Jul '22
        </div>

        <div className="rc1">
          <div className="rc1_left">
            <div className="work_img_box">
            <div className="img_container" id={light ? "img_container_light": null}>
                <img
                  src={santanet}
                  className="ridecell_logo santanent_logo"
                  id={light ? "img_cont_bg_light": null}
                />
              </div>
              <div className="img_cont_bg" id={light ? "img_cont_bg_light": null}></div>
            </div>
          </div>
          <div className="rc1_right">
            <div className="about_comp">About The Company</div>
            <div className="about_content">
              <p>
                SantaNet is a social service, non-profit organisation founded in
                2020 that aims to educate and uplift the less privileged. At
                SantaNet, the vision is to use technology to dramatically
                increase transparency in donations and automation in practical
                education for the less privileged. It also aims to increase
                volunteers for educating and spreading awareness among children
                in orphanages, foster homes and special education centres. They
                focus on holistic development through their well designed
                application and meticulously curated courses on topics like
                social awareness, STEM made fun, and sexual education.
              </p>
              <a href="https://ridecell.com/" target={"_blank"}>
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
            <div className="mywork">My Work at SantaNet</div>

            <p>
              Over the course of my part-time internship at SantaNet as a
              WebDeveloper, I worked as a part of a team of 4 developers,
              working primarily on the Frontend of the Website for this NGO,
              using ReactJS.
            </p>
          </div>
          <div className="rc2_right">
            <div className="skillsH">Tools and Technologies Used</div>
            <div className="skil_set">
              <div className="work_skill">ReactJS</div>
              <div className="work_skill">JavaScript</div>
              <div className="work_skill">CSS</div>
              <div className="work_skill">Bootstrap</div>
              <div className="work_skill">Material UI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
