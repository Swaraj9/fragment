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

const backgroundColors = ['rgb(0,0,0,0.3)', 'rgb(102, 35, 106, 0.3)', 'rgb(40, 153, 203, 0.3)', 'rgb(80, 13, 239, 0.3)', 'rgb(216, 19, 115, 0.3)'];

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  const [currBackgroundColor, setCurrBackgroundColor] = useState(0);

  const scrollDiv = useRef(null);
  const {scrollYProgress} = useScroll({container: scrollDiv})

  const scaleY = scrollYProgress

  useEffect(() => {
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
        zoom: 1.25
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
    <div className="App" ref={myRef} style={{width:'100%', color:'rgb(235,235,235)', height:'100vh', overflow:'hidden'}} >
      <div ref={scrollDiv} onScroll={handleScroll} className='main' style={{width:'100%', display:'flex', transitionProperty: 'all', transitionDuration:'1s', scrollBehavior:'smooth', backgroundColor:backgroundColors[currBackgroundColor], height:'100%', overflowY:'scroll', scrollbarWidth:'none'}}>
        <div style={{flex:'1'}}>
          <Navbar/>
          <Home/>
          <Services scrollRef={scrollDiv}/>
          <Portfolio/>
          <About/>
          <Footer/>
        </div>
        <motion.div style={{scaleY, position:"sticky", top:0, width:'0.25rem', backgroundColor:'rgb(235,235,235)'}}></motion.div>
      </div>
    </div>
  );
}

export default App;
