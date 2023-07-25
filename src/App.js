import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./styles/app.css";
import { motion, useScroll } from "framer-motion";
import loader from "./images/fragment.webp";
import { CursorContextProvider } from "./cursorContext";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from "p5";
import ScrollButton from "./components/ScrollButton";
import Posts from "./components/Posts";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Main = ({inHome, setInHome}) => {
  return(
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Home inHome={inHome} setInHome={setInHome} />
      <Services />
      <Footer/>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true);

  const [inHome, setInHome] = useState(false);

  const scrollDiv = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollDiv });

  const scaleY = scrollYProgress;

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          TOPOLOGY({
            el: vantaRef.current,
            p5: p5,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            color: 0x8a2be2,
            backgroundColor: 0x0,
          })
        );
      }
    }, 3000)
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, loading]);

  return (
    <BrowserRouter basename="/fragment">
      <CursorContextProvider>
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
          {loading ?
            <div
              style={{
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                loading="eager"
                width="80%"
                style={{ maxWidth: "800px" }}
                src={loader}
                alt="Loader GIF"
              />
            </div>
          
          
            : <div
              className="App"
              style={{
                width: "100%",
                color: "rgb(235,235,235)",
                height: "100%",
                overflow: "hidden",
              }}
              ref={vantaRef}
            >
              <div
                ref={scrollDiv}
                className="main"
                style={{
                  display: loading ? "none" : "flex",
                  width: "100%",
                  transitionProperty: "all",
                  transitionDuration: "1s",
                  scrollBehavior: "smooth",
                  height: "100%",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                  backgroundColor: "rgb(0,0,0,0.5)",
                }}
              >
                <motion.div
                  style={{ flex: "1" }}
                  initial={{ opacity: 0, backgroundColor: "black" }}
                  animate={{ opacity: 1, backgroundColor: "transparent" }}
                  transition={{ duration: 4 }}
                >
                  <Navbar/>
                  <Routes>
                    <Route path="/blog" element={<Posts/>}/>
                    <Route path="/" element={<Main inHome={inHome} setInHome={setInHome}/>}/>
                  </Routes> 
                </motion.div>
                <motion.div
                  className="scrollBar"
                  style={{
                    scaleY,
                    position: "sticky",
                    top: 0,
                    width: "0.25rem",
                    backgroundColor: "rgb(235,235,235)",
                  }}
                ></motion.div>
                <ScrollButton inHome={inHome} />
              </div>
            </div>}
        </div>
      </CursorContextProvider>
    </BrowserRouter>
  );
}

export default App;
