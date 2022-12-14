import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <div id="about" style={{marginTop:'3rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <div>Our Team</div>
      <div>Meet the team that makes the magic happen</div>
      <div>
        <div>
          <img alt="avatar"/>
          <div>Josh</div>
          <div>CEO and Co-Founder</div>
          <div>Icons</div>
        </div>
        <div>
          <img alt="avatar"/>
          <div>Astlin</div>
          <div>COO and Co-Founder</div>
          <div>Icons</div>
        </div>
        <div>
          <div>
            <div>Have a project in mind?</div>
            <div>Schedule a call to discuss onboarding our team</div>
          </div>
          <Button/>
        </div>
      </div>
    </div>
  )
}

export default About