import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min.js'
import {useState, useRef, useEffect, createContext} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import './app.css'
import Portfolio from './components/Portfolio';
import { motion, useScroll } from 'framer-motion';

const backgroundColors = ['rgb(20,20,20,0.8)', 'rgb(72, 0, 89, 0.8)', 'rgb(24, 0, 71, 0.8)', 'rgb(0, 66, 63, 0.8)', 'rgb(64, 36, 0, 0.8)'];

const ScrollDivContext = createContext(null);

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  const [currBackgroundColor, setCurrBackgroundColor] = useState(0);

  const scrollDiv = useRef(null);
  const {scrollYProgress} = useScroll({container: scrollDiv})

  const scaleY = scrollYProgress

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        amplitudeFactor: 5.00,
        size: 2.50,
        xOffset: 0.10,
        backgroundColor: 0x4042f,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const handleScroll = () => {
    if(window.scrollY % 50 === 0){
      if(currBackgroundColor === backgroundColors.length - 1){
        setCurrBackgroundColor(0);
      }else{
        setCurrBackgroundColor(currBackgroundColor + 1);
      }
    }
  }

  return (
    <ScrollDivContext.Provider value={scrollDiv}>
      <div className="App" ref={myRef} style={{color:'rgb(235,235,235)', height:'100vh', width:'100w', overflow:'hidden'}} >
          <div ref={scrollDiv} onScroll={handleScroll} className='main' style={{width:'100%', display:'flex', transitionProperty: 'all', transitionDuration:'1s', scrollBehavior:'smooth', backgroundColor:backgroundColors[currBackgroundColor], height:'100%', overflowY:'scroll', scrollbarWidth:'none'}}>
            <div style={{flex:'1'}}>
              <Navbar/>
              <Home/>
              <Services ScrollDivContext={ScrollDivContext}/>
              <Portfolio/>
              <About/>
              <Footer/>
            </div>
            <motion.div style={{scaleY, position:"sticky", top:0, width:'0.5rem', backgroundColor:'rgb(235,235,235)'}}></motion.div>
          </div>
        </div>
    </ScrollDivContext.Provider>
  );
}

export default App;
