import React, { useState, useEffect, useCallback } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import AnimatedCursor from "react-animated-cursor";
import Header from "../Header/Header";
export default function Main() {
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
        value: light?"#000000":"#ffffff",
      },
      links: {
        color: light?"#000000":"#ffffff",
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
        value: light?"#000000":"#ffffff",
      },
      nb: Math.round(Math.sqrt(width)),
      links: {
        color: light?"#000000":"#ffffff",
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
    <div id={light ? "lightid": null}>
      <Header light={light} setLight={setLight}/>

      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color={light?"0,0,0":"255, 255, 255"}
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

      <Landing light={light} setLight={setLight}/>
      <About light={light} setLight={setLight}/>
      <Skills light={light} setLight={setLight}/>
      <Projects light={light} setLight={setLight}/>
      <Work light={light} setLight={setLight}/>
      <Contact light={light} setLight={setLight}/>
    </div>
  );
}
