import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min.js'
import {useState, useRef, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import './app.css'
import Portfolio from './components/Portfolio';

const backgroundColors = ['rgb(20,20,20,0.8)', 'rgb(72, 0, 89, 0.8)', 'rgb(24, 0, 71, 0.8)', 'rgb(0, 66, 63, 0.8)'];

function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  const [currBackgroundColor, setCurrBackgroundColor] = useState(0);

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
    <div className="App" ref={myRef} style={{color:'rgb(235,235,235)', height:'100vh', overflow:'hidden'}} >
      <div onScroll={handleScroll} className='main' style={{transitionProperty: 'all', transitionDuration:'1s', scrollBehavior:'smooth', backgroundColor:backgroundColors[currBackgroundColor], height:'100%', overflowY:'scroll', scrollbarWidth:'none'}}>
        <Navbar/>
        <Home/>
        <Services/>
        <Portfolio/>
        <About/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
