import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact'
import {useTypewriter,Cursor} from "react-simple-typewriter";

function About() {
  const [text] = useTypewriter({
    words:["Node.js Developer","Back-end Developer","Software Developer"],
    Loop:true,
    typeSpeed:40,
    deleteSpeed:20,
    delaySpeed:500

  });
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
            Hi 🖐️, I'm 
            <span className='info-myname'> Biswajit Ghosh</span>
            <br/> <span className='info-name'>{text}</span>
          
            </div>
            <div className='about-photo'>
            <img src= {require('../../../assets/coding.png')}
            className='picture'
             />   
            </div>

        </div>
        <SocialContact/>
    </div>
  )
}

export default About