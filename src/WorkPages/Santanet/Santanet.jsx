import React, { useCallback } from "react";
import "./Santanet.css";
import { loadFull } from "tsparticles";
import santanet from "../../Assets/Work/santanet.png";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { AiFillCalendar } from "react-icons/ai";

export default function Santanet() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <div className="workex_main">
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color="255, 255, 255"
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
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
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
                type: "square",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
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
            <div id="img_container">
              <img
                src={santanet}
                className="ridecell_logo"
                id="santanent_logo"
              />
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
