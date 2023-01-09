import React from 'react'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import s6 from '../images/s6.png'
import s7 from '../images/s7.png'

const CaseStudy = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'150px'}}>
        <div style={{fontSize:'3rem', marginBottom:'3rem'}}>Case Study</div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s1} alt='case study'/>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s2} alt='case study'/>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s3} alt='case study'/>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s4} alt='case study'/>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s5} alt='case study'/>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s6} alt='case study'/>
            <img style={{width:'80%', marginBottom:'5rem', borderRadius:'10px'}} src={s7} alt='case study'/>
        </div>
    </div>
  )
}

export default CaseStudy