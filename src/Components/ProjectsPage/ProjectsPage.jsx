import React, { useCallback, useState, useEffect } from "react";
import "./ProjectsPage.css";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import psychup from "../../Assets/Skills/psych.png";
import datagrad from "../../Assets/Skills/datagrad.png";
import decrypt from "../../Assets/Skills/decrypt.png";
import atlantis from "../../Assets/Skills/atlantis.png";
import ecommerce from "../../Assets/Skills/ecommerce.png";
import chattify from "../../Assets/Skills/chattify.png";
import discussion from "../../Assets/Skills/discussion.png";
import todo from "../../Assets/Skills/todo.png";
import mahe from "../../Assets/mahe.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
import Header from "../Header/Header";

export default function ProjectsPage() {
  const [light, setLight] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
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
    <>
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

      <div className="projectsPage_main" id={light ? "lightid" : null}>
        <div className="projectsPage_header">All Projects</div>
        <div className="card_c">
          {/*Psychup */}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={psychup}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">Psychup</div>
              <div className="proj_text">
                It is a project aims to increase knowledge and awareness
                regarding mental health in India.
              </div>
              <div className="icons_c">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/psychup"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a target="__blank" href="https://www.psychup.org.in/">
                  <HiGlobeAlt className="picon" />
                </a>
                <a target="__blank" href="https://instagram.com/psychup_org">
                  <AiFillInstagram className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Datagrad */}

          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={datagrad}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">DataGrad</div>
              <div className="proj_text">
                It aims to bridge the gap between top MOOCs like Coursera, and
                students eager to learn new skills.
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/datagrad"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a target="__blank" href="https://datagrad.netlify.app/">
                  <HiGlobeAlt className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Decrypt */}

          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={decrypt}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">Decrypt</div>
              <div className="proj_text">
                A website for an annual online cryptic hunt competition
                conducted by IEEE SBM, with over 500 participants.
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/d3crypt_backend"
                >
                  <AiFillGithub className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>
          {/*Datagrad */}

          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={mahe}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">SLCM Automation</div>
              <div
                className="proj_text"
                style={{ width: "103%", marginLeft: "-1.5%" }}
              >
                Selenium web scraping and automation tool to simplify data
                collection and form filling from Portal.
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/form_filling_automation"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a target="__blank" href="https://mitcse.manipal.edu/mentor">
                  <HiGlobeAlt className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Atlantis */}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={atlantis}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">Atlantis</div>
              <div className="proj_text">
                A website built using React JS, for IEEE SBM's annual TechWeek
                2022.
              </div>
              <div className="icons_c2">
                {/* <AiFillGithub className="picon" />{" "} */}
                <a target="__blank" href="https://atlantis.ieeemanipal.com/">
                  <HiGlobeAlt className="picon" />{" "}
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Ecommerce */}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={ecommerce}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">Ecommerce website</div>
              <div className="proj_text">
                A basic Ecommerce website built using MongoDB, Express, React
                JS, and Node JS. Styled using bootstrap.
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/Ecommerce_site_practice"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a
                  target="__blank"
                  href="https://ecommerce.suryaanshrathinam.com/"
                >
                  <HiGlobeAlt className="picon" />{" "}
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Chattify */}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={chattify}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">Chattify</div>
              <div className="proj_text">
                A real time chat Application built using React JS, Firebase for
                Authentication and{" "}
                <a href="https://chatengine.io/">Chat Engine</a>
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/Chat-app"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a target="__blank" href="https://chat.suryaanshrathinam.com/">
                  <HiGlobeAlt className="picon" />{" "}
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Discussion Rooms */}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={discussion}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">Discussion Rooms</div>
              <div className="proj_text">
                A discussion rooms application, built with HTML-CSS Frontend and
                Python (Django) Backend.
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/Discussion_Rooms_Django_App"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a
                  target="__blank"
                  href="https://suryaansh-django-app.herokuapp.com/"
                >
                  <HiGlobeAlt className="picon" />{" "}
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*To Do*/}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img
                src={todo}
                className="proj_img"
                id={light ? "proj_img_light" : null}
              ></img>
              <div className="proj_title">To Do App</div>
              <div className="proj_text">
                A responsive Todo Web Application built using MERN Stack and
                Authentication using JWT.
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/suryaansh2002/To_Do_App"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a
                  target="__blank"
                  href="https://to-do-app-suryaansh.netlify.app/"
                >
                  <HiGlobeAlt className="picon" />{" "}
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>
        </div>
      </div>
    </>
  );
}
