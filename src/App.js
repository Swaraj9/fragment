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
import ParticleBackground from './components/ParticleBackground';

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

  /*const handleScroll = () => {
    if(window.scrollY % 300 === 0){
      let bgColor = Math.floor(Math.random()*backgroundColors.length);
      setCurrBackgroundColor(bgColor);
    }
  }*/

  return (
    <div style={{width:'100vw', height:'100vh', overflow:'hidden'}}>
      {loading && <div style={{backgroundColor:'black', display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height:'100%'}}><img style={{width: '60%', height:'60%'}} src={loader} alt="Loader GIF"/></div>}
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
              <ParticleBackground/>
              <Navbar setContact={setContact} contact={contact}/>
              { !contact ?
                <div>
                  <Home/>
                  <Services/>
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
  );
}

export default App;
