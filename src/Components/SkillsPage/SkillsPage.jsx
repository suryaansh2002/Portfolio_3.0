import React, { useCallback, useState, useEffect } from "react";
import SkillsCard from "../Skills/SkillsCard";
import "./SkillsPage.css";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import c from "../../Assets/Skills/c.png";
import cpp from "../../Assets/Skills/c++.png";
import python from "../../Assets/Skills/python.png";
import java from "../../Assets/Skills/java.png";
import js from "../../Assets/Skills/js.png";
import react from "../../Assets/Skills/react.png";
import mongo from "../../Assets/Skills/mongodb.png";
import express from "../../Assets/Skills/express.png";

import firebase from "../../Assets/Skills/firebase.png";
import appium from "../../Assets/Skills/appium.png";
import docker from "../../Assets/Skills/docker.png";
import django from "../../Assets/Skills/django.png";
import aws from "../../Assets/Skills/aws.png";

import html from "../../Assets/Skills/html.png";
import css from "../../Assets/Skills/css.png";
import ts from "../../Assets/Skills/typescript.png";
import react_native from "../../Assets/Skills/r-native.png";
import react_native_dark from "../../Assets/Skills/r-native_dark.png";

import bootstrap from "../../Assets/Skills/bootstrap.png";
import php from "../../Assets/Skills/php.png";

import redux from "../../Assets/Skills/redux.png";
import sass from "../../Assets/Skills/sass.png";
import mysql from "../../Assets/Skills/mysql.png";
import git from "../../Assets/Skills/git.png";
import matlab from "../../Assets/Skills/matlab.png";
import selenium from "../../Assets/Skills/selenium.png";
import flutter from "../../Assets/Skills/flutter.png";
import canva from "../../Assets/Skills/canva.png";
import figma from "../../Assets/Skills/figma.png";
import node from "../../Assets/Skills/node.png";
import fastapi from "../../Assets/Skills/fastapi.png";
import next from "../../Assets/Skills/next.png";
import typeorm from "../../Assets/Skills/typeorm.png";
import nest from "../../Assets/Skills/nest.png";
import postgres from "../../Assets/Skills/postgres.png";

import Header from "../Header/Header";

export default function SkillsPage(props) {
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

  useEffect(() => {
    if (localStorage.getItem("theme") == "true") {
      setLight(true);
    }
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
        value: 50,
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
        value: 30,
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
      <div className="skillsPage_main" id={light ? "lightid" : null}>
        <div className="skillsPage_header">My Skills</div>
        <div className="skillsPage_text">
          I've been exploring a lot over the last couple of years, in an attempt
          to enhance my skill set. Here are some of the skills that I have
          worked on during this time.
        </div>
        <div className="skillsPage_cards">
          <SkillsCard light={light} img={c} name="C" stars={4} half={true} />
          <SkillsCard
            light={light}
            img={cpp}
            name="C++"
            stars={4}
            half={false}
          />
          <SkillsCard
            light={light}
            img={python}
            name="Python"
            stars={4}
            half={true}
          />
          <SkillsCard
            light={light}
            img={java}
            name="Java"
            stars={3}
            half={true}
          />
          <SkillsCard
            light={light}
            img={js}
            name="JavaScript"
            stars={5}
            half={false}
          />
          <SkillsCard
            light={light}
            img={react}
            name="React JS"
            stars={4}
            half={true}
          />
          <SkillsCard
            light={light}
            img={mongo}
            name="MongoDB"
            stars={4}
            half={false}
          />
          <SkillsCard light={light} img={express} stars={4} half={false} />
          <SkillsCard light={light} img={node} stars={4} half={false} />
          <SkillsCard light={light} img={fastapi} stars={3} half={false} />
          <SkillsCard light={light} img={next} stars={4} half={false} />
          <SkillsCard light={light} img={typeorm} stars={3} half={false} />
          <SkillsCard light={light} img={nest} stars={3} half={false} />
          <SkillsCard light={light} img={firebase} stars={3} half={true} />
          <SkillsCard light={light} img={appium} stars={3} half={true} />
          <SkillsCard light={light} img={postgres} stars={3} half={false} />
          <SkillsCard light={light} img={docker} stars={3} half={false} />
          <SkillsCard light={light} img={aws} stars={3} half={false} />
          <SkillsCard light={light} img={django} stars={3} half={true} />
          <SkillsCard light={light} img={html} stars={5} half={false} />
          <SkillsCard light={light} img={css} stars={5} half={false} />
          <SkillsCard light={light} img={ts} stars={4} half={false} />
          <SkillsCard
            img={light ? react_native : react_native_dark}
            stars={3}
            half={false}
            light={light}
          />
          <SkillsCard light={light} img={php} stars={3} half={true} />
          <SkillsCard light={light} img={bootstrap} stars={5} half={false} />
          <SkillsCard light={light} img={redux} stars={3} half={true} />
          <SkillsCard light={light} img={sass} stars={4} half={false} />
          <SkillsCard light={light} img={mysql} stars={4} half={true} />
          <SkillsCard light={light} img={git} stars={5} half={false} />
          <SkillsCard light={light} img={selenium} stars={4} half={false} />
          <SkillsCard light={light} img={flutter} stars={2} half={true} />
          <SkillsCard light={light} img={matlab} stars={3} half={false} />
          <SkillsCard light={light} img={canva} stars={3} half={true} />
          <SkillsCard light={light} img={figma} stars={2} half={true} />
        </div>
      </div>
    </>
  );
}
