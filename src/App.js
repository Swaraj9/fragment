import {useState, useRef, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/app.css'
import { motion, useScroll} from 'framer-motion';
import loader from './images/fragment.gif';
import Contact from './components/Contact';
//import ParticleBackground from './components/ParticleBackground';
import Cursor from './components/Cursor';
import { CursorContextProvider } from './cursorContext';
import TOPOLOGY from 'vanta/dist/vanta.topology.min'
import p5 from 'p5'

//const backgroundColors = ['rgb(0,0,0,0.3)', 'rgb(102, 35, 106, 0.3)', 'rgb(40, 153, 203, 0.3)', 'rgb(80, 13, 239, 0.3)', 'rgb(216, 19, 115, 0.3)'];

function App() {

  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);


  const scrollDiv = useRef(null);
  const {scrollYProgress} = useScroll({container: scrollDiv})

  const scaleY = scrollYProgress

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TOPOLOGY({
        el: vantaRef.current,
        p5: p5,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        color: 0x8a2be2,
        backgroundColor: 0x0
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    }, 2000)

  }, [])

  return (
    <CursorContextProvider>
      <div style={{width:'100vw', height:'100vh', overflow:'hidden'}}>
        <Cursor/>
        {loading && <div style={{backgroundColor:'black', display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height:'100%'}}><img src={loader} alt="Loader GIF"/></div>}
        <div 
          className="App" 
          style={{width:'100%', color:'rgb(235,235,235)', height:'100%', overflow:'hidden'}} 
          ref={vantaRef}
        >
            <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}} 
              transition={{duration:1.8, ease:'linear'}} 
              ref={scrollDiv} 
              className='main' 
              style={{backgroundColor:'rgb(0,0,0,0.4)', display:loading?'none':'flex',width:'100%', transitionProperty: 'all', transitionDuration:'1s', scrollBehavior:'smooth', height:'100%', overflowY:'scroll', scrollbarWidth:'none'}}
            >
              <div style={{flex:'1'}}>
                  <Navbar setContact={setContact} contact={contact}/>
                  { !contact ?
                    <div>
                        <Home/>
                        <Services scrollRef={scrollDiv}/>
                        {/*<Portfolio setContact={setContact}/>
                        <About setContact={setContact}/>*/}
                    </div> : <Contact/>
                  }
                  <Footer setContact={setContact}/>
              </div>
              <motion.div className='scrollBar' style={{scaleY, position:"sticky", top:0, width:'0.25rem', backgroundColor:'rgb(235,235,235)'}}></motion.div>
            </motion.div>
          </div>
      </div>
    </CursorContextProvider>
  );
}

export default App;
