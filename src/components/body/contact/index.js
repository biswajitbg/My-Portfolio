import React from 'react'
import'./contact.css'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'

function Contact() {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'> Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Contact me on any of the platform</p>
          
          <SocialContact/>

        </div>
        <div className='download'>
          <a download href={require('../../../assets/Resume_Biswajit Ghosh.pdf')}>
          <i class="fi fi-rr-cloud-download-alt download-icon"/>
          Download Resume
          </a>

        </div>

      </div>

      </div>
    
  )
}

export default Contact