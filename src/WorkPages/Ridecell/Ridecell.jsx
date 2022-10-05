import React, {useCallback} from 'react'
import './Ridecell.css'
import { loadFull } from "tsparticles";

import AnimatedCursor from "react-animated-cursor"
import Particles from "react-tsparticles";

export default function Ridecell() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    
    
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
  return (
    <div className='workex_main'>
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
    <div className='r_title'>Ridecell</div>
    </div>
  )
}
