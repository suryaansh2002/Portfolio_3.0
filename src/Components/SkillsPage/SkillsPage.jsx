import React, {useCallback} from 'react';
import SkillsCard from '../Skills/SkillsCard';
import './SkillsPage.css'
import AnimatedCursor from "react-animated-cursor"
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


export default function SkillsPage() {
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

  return (
    <>
    <AnimatedCursor
    innerSize={20}
    outerSize={20}
    color='255, 255, 255'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
  />
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    
                },
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
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
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
                        distance: 150,
                        enable: true,
                        opacity: 0.25,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

    <div className='skillsPage_main'>
        <div className='skillsPage_header'>My Skills</div>
        <div className='skillsPage_text'>
        I've been exploring a lot over the last couple of years, in an attempt to enhance my skill 
        set. Here are some of the skills that I have worked on during this time.
        </div>
        <div className='skillsPage_cards'>
        <SkillsCard img={c} name="C" stars={4} half={true} />
          <SkillsCard img={cpp} name="C++" stars={4} half={false} />
          <SkillsCard img={python} name="Python" stars={4} half={true} />
          <SkillsCard img={java} name="Java" stars={3} half={true} />
          <SkillsCard img={js} name="JavaScript" stars={5} half={false} />
          <SkillsCard img={react} name="React JS" stars={4} half={true} />
          <SkillsCard img={mongo} name="MongoDB" stars={4} half={false} />
          <SkillsCard img={express} name="ExpressJS" stars={4} half={false} />
          <SkillsCard img={node} name="ExpressJS" stars={4} half={false} />

          <SkillsCard img={firebase} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={appium} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={docker} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={aws} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={django} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={html} name="ExpressJS" stars={5} half={false} />
          <SkillsCard img={css} name="ExpressJS" stars={5} half={false} />
          <SkillsCard img={ts} name="ExpressJS" stars={4} half={false} />
          <SkillsCard img={react_native} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={php} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={bootstrap} name="ExpressJS" stars={5} half={false} />

          <SkillsCard img={redux} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={sass} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={mysql} name="ExpressJS" stars={4} half={true} />
          <SkillsCard img={git} name="ExpressJS" stars={4} half={true} />
          <SkillsCard img={selenium} name="ExpressJS" stars={4} half={false} />
          <SkillsCard img={flutter} name="ExpressJS" stars={2} half={true} />
          <SkillsCard img={matlab} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={canva} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={figma} name="ExpressJS" stars={2} half={true} />

        </div>
    </div>
    </>
  )
}
