import {useState, useRef, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import './styles/app.css'
import Portfolio from './components/Portfolio';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import loader from './images/fragment.gif';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import Cursor from './components/Cursor';
import { CursorContextProvider } from './cursorContext';

//const backgroundColors = ['rgb(0,0,0,0.3)', 'rgb(102, 35, 106, 0.3)', 'rgb(40, 153, 203, 0.3)', 'rgb(80, 13, 239, 0.3)', 'rgb(216, 19, 115, 0.3)'];

function App() {

  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(false);


  const scrollDiv = useRef(null);
  const {scrollYProgress} = useScroll({container: scrollDiv})

  const scaleY = scrollYProgress

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    }, 2000)

  }, [])

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const paraX = useTransform(x, [0, window.innerWidth], [100, -100]);
  const paraY = useTransform(y, [0, window.innerHeight], [100, -100]);

  const handleMouse = (event) => {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  return (
    <CursorContextProvider>
      <div onMouseMove={handleMouse} style={{width:'100vw', height:'100vh', overflow:'hidden'}}>
        <Cursor/>
        {loading && <div style={{backgroundColor:'black', display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height:'100%'}}><img src={loader} alt="Loader GIF"/></div>}
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{duration:1.8, repeat:1, ease:'linear'}} 
          className="App" 
          style={{width:'100%', color:'rgb(235,235,235)', height:'100%', overflow:'hidden'}} 
        >
            <div 
              ref={scrollDiv} 
              className='main' 
              style={{display:loading?'none':'flex',width:'100%', transitionProperty: 'all', transitionDuration:'1s', scrollBehavior:'smooth', height:'100%', overflowY:'scroll', scrollbarWidth:'none'}}
            >
              <div style={{flex:'1'}}>
                <ParticleBackground paraX={paraX} paraY={paraY}/>
                <Navbar setContact={setContact} contact={contact}/>
                { !contact ?
                  <div>
                      <Home/>
                      <Services scrollRef={scrollDiv}/>
                      <Portfolio setContact={setContact}/>
                      <About setContact={setContact}/>
                  </div> : <Contact/>
                }
                <Footer setContact={setContact}/>
              </div>
              <motion.div style={{scaleY, position:"sticky", top:0, width:'0.25rem', backgroundColor:'rgb(235,235,235)'}}></motion.div>
            </div>
          </motion.div>
      </div>
    </CursorContextProvider>
  );
}

export default App;
