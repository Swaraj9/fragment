import React, {useCallback} from 'react'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles'
import '../styles/app.css'

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className='particles'
            options={{
                fpsLimit: 60,
                particles: {
                  number: {
                    value: 120,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 10,
                      sync: true
                    }
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 3,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 0,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 20,
                      size_min: 0.1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 200,
                    color: "random",
                    opacity: 0.6,
                    width: 1,
                    triangles: {
                      enable: false,
                      color: "#ffffff",
                      opacity: 0.1,
                    }
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    center:{
                      x:400,
                      y:400,
                      radius:50
                    },
                    attract: {
                      enable: false,
                    },
                  }
                },
                interactivity: {
                  detect_on: "window",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 300,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    connect:{
                      distance:100,
                      radius:40,
                      links:{
                        opacity:1
                      }
                    },
                    bubble: {
                      distance: 100,
                      size: 10,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 50
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true,
                backgroundMode:{
                    enable:true
                },
                background: {
                  zIndex:-100,
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover"
                },
                
            }}
        />
    )
}

export default ParticlesBackground