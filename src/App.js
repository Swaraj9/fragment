import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min.js'
import {useState, useRef, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import './styles/app.css'
import Portfolio from './components/Portfolio';
import { motion, useScroll } from 'framer-motion';
import loader from './images/fragment.gif';
import Contact from './components/Contact';

const backgroundColors = ['rgb(0,0,0,0.3)', 'rgb(102, 35, 106, 0.3)', 'rgb(40, 153, 203, 0.3)', 'rgb(80, 13, 239, 0.3)', 'rgb(216, 19, 115, 0.3)'];

const Floater = ({speed, children}) => {
  
  const [x, setX] = useState(Math.random()*500);
  const [speedX, setSpeedX] = useState(speed);
  const [y, setY] = useState(Math.random()*500);
  const [speedY, setSpeedY] = useState(speed);

  return(
    <motion.div
      animate={{ x: x, y: y}}
      transition={{
        ease: "linear",
        //duration: 0.001
        // repeat: Infinity
      }}
      onAnimationComplete={() => {
        setX(x + speedX);
        setY(y + speedY);
        if (x <= 100) {
          setSpeedX(speed);
        }
        if (x >= window.innerWidth - 500) {
          setSpeedX(-speed);
        }

        if (y <= 100) {
          setSpeedY(speed);
        }

        if (y >= window.innerHeight - 500) {
          setSpeedY(-speed);
        }
      }}
    >
      {children}
    </motion.div>
  )
}

function App() {

  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);

  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  const [currBackgroundColor, setCurrBackgroundColor] = useState(0);

  const scrollDiv = useRef(null);
  const {scrollYProgress} = useScroll({container: scrollDiv})

  const scaleY = scrollYProgress


  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 2000)

    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        THREE:THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x000000,
        shininess: 80.00,
        waveHeight: 17.50,
        waveSpeed: 1.50,
        zoom: 0.9
      }))
    }



    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const handleScroll = () => {
    if(window.scrollY % 300 === 0){
      let bgColor = Math.floor(Math.random()*backgroundColors.length);
      setCurrBackgroundColor(bgColor);
    }
  }

  return (
    <div style={{width:'100vw', height:'100vh', overflow:'hidden'}}>
      {loading && <div style={{backgroundColor:'black', display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height:'100%'}}><img style={{width: '60%', height:'60%'}} src={loader} alt="Loader GIF"/></div>}
      <div className="App" ref={myRef} style={{width:'100%', color:'rgb(235,235,235)', height:'100%', overflow:'hidden'}} >
          <div ref={scrollDiv} onScroll={handleScroll} className='main' style={{display:loading?'none':'flex',width:'100%', transitionProperty: 'all', transitionDuration:'1s', scrollBehavior:'smooth', backgroundColor:backgroundColors[currBackgroundColor], height:'100%', overflowY:'scroll', scrollbarWidth:'none'}}>
            <div style={{position:'fixed', zIndex:-10}}>
              <Floater speed={10}>
                <motion.div
                  animate={{rotate:[0,360]}}
                  transition={{repeat:'Infinity', duration:7, ease:'linear', delay:0}}
                >
                  <svg height="210" width="500">
                    <polygon points="200,10 250,190 160,210" style={{fill:'rgb(185,185,185,0.2)'}} />
                  </svg>
                </motion.div>
              </Floater>
              <Floater speed={30}>
                <motion.div
                  animate={{rotate:[0,360]}}
                  transition={{repeat:'Infinity', duration:7, ease:'linear', delay:0}}
                >
                  <svg height="210" width="500">
                    <polygon points="200,10 250,190 160,210 80,170" style={{fill:'rgb(185,185,185,0.2)'}} />
                  </svg>
                </motion.div>
              </Floater>
              <Floater speed={50}>
                <motion.div
                  animate={{rotate:[0,360]}}
                  transition={{repeat:'Infinity', duration:7, ease:'linear', delay:0}}
                >
                  <svg height="210" width="500">
                    <polygon points="250,190 160,210 80,130 20,80" style={{fill:'rgb(185,185,185,0.2)'}} />
                  </svg>
                </motion.div>
              </Floater>
            </div>
            <div style={{flex:'1'}}>
              <Navbar setContact={setContact} contact={contact}/>
              { !contact ?
                <div>
                  <Home/>
                  <Services/>
                  <Portfolio setContact={setContact}/>
                  <About setContact={setContact}/>
                </div> : <Contact/>
              }
              <Footer/>
            </div>
            <motion.div style={{scaleY, position:"sticky", top:0, width:'0.25rem', backgroundColor:'rgb(235,235,235)'}}></motion.div>
          </div>
        </div>
      

    </div>
  );
}

export default App;
