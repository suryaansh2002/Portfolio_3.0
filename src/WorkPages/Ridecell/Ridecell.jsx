import React, { useCallback } from "react";
import "./Ridecell.css";
import { loadFull } from "tsparticles";
import ridecell from "../../Assets/Work/ridecell.png";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { AiFillCalendar, AiOutlineLink } from "react-icons/ai";
import Header from "../../Components/Header/Header";

export default function Ridecell() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="workex_main">
    <Header/>
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
      <div className="r_title">Ridecell</div>
      <div className="work_dur">
        <AiFillCalendar className="work_calender" />
        May '22 - Aug '22
      </div>

      <div className="rc1">
        <div className="rc1_left">
          <div className='work_img_box'>
            <div className="img_container">
              <img src={ridecell} className="ridecell_logo" />
            </div>
            <div className="img_cont_bg"></div>
          </div>
        </div>
        <div className="rc1_right">
          <div className="about_comp">About The Company</div>
          <div className="about_content">
            <p>
              Ridecell is a private company founded in 2009 with its headquaters
              in San Francisco, CA. Ridecell Inc. is leading the way in the
              digital transformation of fleet businesses and operations. Their
              Fleet Automation solutions modernize and monetize fleets by
              combining data insights with digital vehicle control to turn
              today’s manual processes into automated workflows.
            </p>
            <p>
              Ridecell builds the technologies and solutions that unlock the
              full power of fleets and fleet management systems. With the help
              of their Fleet Automation and Mobility platform, they integrate
              data from sensors and multiple siloed IT systems and turn it into
              usable insights, digital vehicle control, and automated workflows.
              For the customers the result is nothing short of transformative,
              dramatically streamlining fleet operations and opening up new
              revenue opportunities.
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
          <div className="mywork">My Work at Ridecell</div>
          <p>
            Over the course of my 4 month internship at Ridecell, I primarily
            worked with Quality Assuarance, Automation and Testing. Starting off
            with understanding and testing various existing API endpoints, and
            moving on to automating assigned sets of test cases on Testrail.
          </p>
          <p>
            I then moved on to testing of various versions of their different
            mobile apps that had finished development. Since manual testing of
            most of the test cases was perform by a separate team, I built upon
            their work to automate the test cases which were functioning
            manually, using Selenium and Appium, and subsequently adding the
            automated test cases to the existing CI/CD pipeline, to detect, test
            and report any breaking changes as new versions were deployed.
          </p>
        </div>
        <div className="rc2_right">
          <div className="skillsH">Tools and Technologies Used</div>
          <div className="skil_set">
            <div className="work_skill">Python</div>
            <div className="work_skill">Pytest</div>
            <div className="work_skill">RestAPIs</div>
            <div className="work_skill">Selenium</div>
            <div className="work_skill">Appium</div>
            <div className="work_skill">Testrail</div>
          </div>
        </div>
      </div>
    </div>
  );
}
