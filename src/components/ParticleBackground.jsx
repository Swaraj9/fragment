import React from 'react'
// import Particles from 'react-tsparticles';
// import {loadFull} from 'tsparticles'
import '../styles/app.css'
import '../styles/background.css'
import { motion } from 'framer-motion'

const ParticlesBackground = ({paraX, paraY}) => {
    // const particlesInit = useCallback(async (engine) => {
    //     await loadFull(engine);
    // }, []);

    const draw = {
      hidden: { pathLength: 0, x: 0, y: 0, scale: 1},
      visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
          pathLength: 1,
          opacity: 1,
          //scale: [1, 1.05, 1],
          x: [i*0.3, i * -0.3, i*0.3],
          y: [i*0.3, i * -0.3, i*0.3],
          transition: {
            pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
            x: {delay, duration: 8, repeat: 'Infinity'},
            y: {delay, duration: 8, repeat: 'Infinity'},
            scale: {duration: 8, repeat: 'Infinity'},
          }
        };
      }
    };

      return(
        <div className="animation-wrapper">
              <div className="sphere-animation">
                <motion.svg style={{x:paraX, y:paraY}} initial="hidden" animate="visible" className="sphere" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
                  <defs>
                    <linearGradient id="sphereGradient" x1="25%" x2="25%" y1="0%" y2="75%">
                      <stop stop-color="#373734" offset="0%"/>
                      <stop stop-color="#242423" offset="50%"/>
                      <stop stop-color="#0D0D0C" offset="100%"/>
                    </linearGradient>
                  </defs>
                  <motion.path variants={draw} custom={1} d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"/>
                  <motion.path variants={draw} custom={2} d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"/>
                  <motion.path variants={draw} custom={3} d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"/>
                  <motion.path variants={draw} custom={4} d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
                  <motion.path variants={draw} custom={5} d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"/>
                  <motion.path variants={draw} custom={6} d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
                  <motion.path variants={draw} custom={7} d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"/>
                  <motion.path variants={draw} custom={8} d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"/>
                  <motion.path variants={draw} custom={9} d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"/>
                  <motion.path variants={draw} custom={10} d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"/>
                  <motion.path variants={draw} custom={11} d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"/>
                  <motion.path variants={draw} custom={12} d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"/>
                  <motion.path variants={draw} custom={13} d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"/>
                  <motion.path variants={draw} custom={14} d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"/>
                  <motion.path variants={draw} custom={15} d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"/>
                  <motion.path variants={draw} custom={16} d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"/>
                  <motion.path variants={draw} custom={17} d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"/>
                  <motion.path variants={draw} custom={18} d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"/>
                  <motion.path variants={draw} custom={19} d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"/>
                  <motion.path variants={draw} custom={20} d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"/>
                  <motion.path variants={draw} custom={21} d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"/>
                </motion.svg>
              </div>
        </div>
      )
}

export default ParticlesBackground


/*return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        classNameName='particles'
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
  )*/