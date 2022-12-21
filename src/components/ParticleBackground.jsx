import React, {useCallback} from 'react'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles'

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 120,
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 20,
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
                    image: {
                      src: "https://cdn.matteobruni.it/images/particles/github.svg",
                      width: 100,
                      height: 100
                    }
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
                    value: 3,
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
                    distance: 100,
                    color: "random",
                    opacity: 0.4,
                    width: 1,
                    triangles: {
                      enable: true,
                      color: "#ffffff",
                      opacity: 0.1
                    }
                  },
                  move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "window",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab"
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
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 200
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
                  position: "50% 50%",
                  repeat: "no-repeat",
                  size: "cover"
                }
            }}
        />
    )
}

export default ParticlesBackground