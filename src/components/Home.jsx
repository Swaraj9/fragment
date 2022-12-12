import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div id='home' style={{display:'flex', alignItems:'center', justifyContent:'center', height:'calc(100vh - 4.7rem)'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{paddingBottom:'3rem', fontSize:'5rem', color:'var(--primary)'}}>Fragment Studios</div>
            <div style={{paddingBottom:'2rem', fontSize:'2rem'}}>The next step to scaling your project</div>
            <Button><a style={{textDecoration:'none', color:'inherit'}} href="#services">More Details</a></Button>
        </div>
    </div>
  )
}

export default Home