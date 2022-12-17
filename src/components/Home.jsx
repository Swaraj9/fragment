import React from 'react'
import Button from './Button'
import '../styles/home.css'

const Home = () => {
  return (
    <div id='home' style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', height:'calc(100vh - 4.7rem)'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className='homeTitle'>Fragment Studios</div>
            <div className='homeSub'>The next step to scaling your project</div>
            <Button><a style={{textDecoration:'none', color:'inherit'}} href="#services">More Details</a></Button>
        </div>
    </div>
  )
}

export default Home