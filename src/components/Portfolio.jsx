import React from 'react'
import logo1 from '../images/atlantic-records-logo-puy3lnn7jzsc0ti2vdnm1n98wmc2ap25dd9m5h8s9m.png'
import logo2 from '../images/chibi-dinos-logo-puy3lnn6c50fuktf2qja1bge8fnfcj81ydwdxdysbs.png'
import logo3 from '../images/goat-society-logo-2-puy3lol0l5zjr36qn6zgpm5rvoqdhthkl3s4pqg95m.png'
import logo4 from '../images/pudgy-logo-puy3lpiupt30hsqorrcj6azbf7e5rxfimn7cvxvzzc.png'
import logo5 from '../images/warner-music-logo-puy3lpiwf7d83rvwvqeq6v70c3gk455v89xmnrf5d4.png'
import {motion} from 'framer-motion'

const Logo = ({index, src}) => {
  return(
    <motion.div whileHover={{scale:1.2, rotate:45}}>
      <img src={src} alt={`Logo ${index}`}/>
    </motion.div>
  )
}

const Portfolio = () => {
  return (
    <div id="portfolio" style={{marginTop:'3rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div style={{fontSize:'3rem', marginBottom:'2rem'}}>Our Portfolio</div>
      <div style={{textAlign:'center', fontSize:'1.5rem', maxWidth:'1000px', letterSpacing:'0.1', lineHeight:'2.5rem'}}>Check out a list of notable past client projects with niches including Crypto, NFTs, Metaverse, Music, Social, Gaming, and more!</div>
      <div style={{marginTop:'4rem', display:'flex', justifyContent:'space-evenly', width:'100%', alignItems:'center'}}>
        <div style={{fontSize:'2rem', width:'15rem', textAlign: 'center'}}>43+ Trusted Clients</div>
        <div style={{width:'0.1rem', height:'7rem', backgroundColor:'rgb(235,235,235)'}}></div>
        <Logo index={1} src={logo2}/>
        <Logo index={0} src={logo1}/>
        <Logo index={2} src={logo3}/>
        <Logo index={3} src={logo4}/>
        <Logo index={4} src={logo5}/>
      </div>
    </div>
  )
}

export default Portfolio