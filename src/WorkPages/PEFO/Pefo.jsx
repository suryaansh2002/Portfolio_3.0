import React, { useCallback, useState, useEffect } from "react";
import "./pefo.css";
import { loadFull } from "tsparticles";
import pefo from "../../Assets/Work/pefo.png";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { AiFillCalendar, AiOutlineLink } from "react-icons/ai";
import Header from "../../Components/Header/Header";

export default function Pefo() {
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
        <div className="r_title">PE Front Office</div>
        <div className="work_dur">
          <AiFillCalendar className="work_calender" />
          Dec '22 - Jan '23
        </div>

        <div className="rc1">
          <div className="rc1_left">
            <div className="work_img_box">
              <div
                className="img_container"
                id={light ? "img_container_light" : null}
              >
                <img
                  src={pefo}
                  className="ridecell_logo  pefo_logo"
                  id={light ? "img_cont_bg_light" : null}
                />
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
                PE Front Office is the only comprehensive and integrated suite
                of products that has been developed with a focus on the front
                and middle office processes for alternative investment
                management – Private Credit/Debt, Private Equity, Venture
                Capital, Fund of Funds, Real Estate Funds, Limited Partners, and
                Fund Admins. Their state-of-the-art yet affordable solutions
                include CRM, Deal Flow, Fundraising, Investment Management (that
                supports both Equity and Debt), Portfolio Monitoring, Investor
                Management, Fund Administration, and Investor Portal access.
                This is further augmented by Risk and Compliance Management,
                Task and Activities Management, Outlook/Gmail Integration,
                Mobile App, Document Management, and detailed Reports and
                Analytics.
              </p>
              <p>
                The PE Front Office solution is available as a cloud-based
                subscription model and can also be deployed on the client
                premises. Their software-as-a-service (SaaS) solution is hosted
                on a fully secure, virtual, private cloud that’s dedicated and
                exclusive to each customer.
              </p>
              <a href="https://pefrontoffice.com/" target={"_blank"}>
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
            <div className="mywork">My Work at PE Front Office</div>

            <p>
              Over the course of my internship at PE Front Office, I worked
              primarily as a frontend web-developer. I worked primarily on the
              help-engine for their clients, working on improving and enhancing
              the user interface as well implmenting certain additional features
              in the same.
            </p>
          </div>
          <div className="rc2_right">
            <div className="skillsH">Tools and Technologies Used</div>
            <div className="skil_set">
              <div className="work_skill">HTML</div>
              <div className="work_skill">CSS</div>
              <div className="work_skill">JavaScript</div>
              <div className="work_skill">jQuery</div>
              <div className="work_skill">Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
