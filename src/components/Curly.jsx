import React, { useState } from 'react'
import {motion, useMotionValue} from 'framer-motion'
import '../styles/home.css';

const Curly = ({color, prevColor, index}) => {

    const pathLength = useMotionValue(0);
    const [entered, setEntered] = useState(false);

    const getHeight = () => {
        switch(index){
            case 1:
                return '740px';
            case 2:
                return '105px';
            case 3: 
                return '105px';
            case 4: 
                return '115px';
            default:
                return null;
        }
    }

    return (
        <motion.div onViewportEnter={() => setEntered(true)} style={{}}>
            <div style={{height:getHeight()}}>
                <motion.div
                    initial={{height:'0%'}} 
                    animate={{height:entered?'100%':'0%'}}
                    transition={{duration: 0.5, ease:'linear'}} 
                    viewport={{once:true}}
                    style={{marginTop:'-10px', height:'100%', background:`linear-gradient(${prevColor}, ${color})`}} 
                    className='wireHome'
                ></motion.div>
            </div>
            <svg width="125" height="409" viewBox="0 0 125 409" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path viewport={{once:true}} initial={{pathLength:0}} animate={{pathLength:entered?1:0}} transition={{duration:1, delay:0.5, ease:'linear'}} style={{pathLength}} d="M3.00049 0C3.0005 129 11.6005 200.1 90.0005 204.5C2.0005 204.5 3.00049 306.75 3.00049 409" stroke={color} strokeWidth="5"/>
                <g filter="url(#filter0_f_3_8)">
                <circle cx="90.0005" cy="204" r="10" fill="black"/>
                <circle cx="90.0005" cy="204" r="7.5" stroke={color} strokeWidth="5"/>
                </g>
                <g filter="url(#filter1_f_3_8)">
                <circle cx="90.0005" cy="204" r="10" fill="black"/>
                <circle cx="90.0005" cy="204" r="7.5" stroke={color} strokeWidth="5"/>
                </g>
                <g filter="url(#filter2_f_3_8)">
                <circle cx="90.0005" cy="204" r="10" fill="black"/>
                <circle cx="90.0005" cy="204" r="7.5" stroke={color} strokeWidth="5"/>
                </g>
                <g filter="url(#filter3_d_3_8)">
                <circle cx="90.0005" cy="204" r="10" fill="black"/>
                <circle cx="90.0005" cy="204" r="7.5" stroke={color} strokeWidth="5"/>
                </g>
                <defs>
                <filter id="filter0_f_3_8" x="55.0005" y="169" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_3_8"/>
                </filter>
                <filter id="filter1_f_3_8" x="55.0005" y="169" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_3_8"/>
                </filter>
                <filter id="filter2_f_3_8" x="55.0005" y="169" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_3_8"/>
                </filter>
                <filter id="filter3_d_3_8" x="76.0005" y="194" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_8"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_8" result="shape"/>
                </filter>
                </defs>
            </svg>
        </motion.div>
    )
}

export default Curly