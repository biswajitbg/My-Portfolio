import React from 'react'
import './mobile.css'


function Mobile({isOpen,setIsOpen}) {
  return (
    <div className='mobile' onClick={()=>setIsOpen(!isOpen)}>
    <div className='close-icon'>
    <i class="fi fi-rr-cross-circle"></i>
    </div>
    <div className='mobile-options'>
    <div className='mobile-option'>
        <a href='#projects'>
        <i class="fi fi-rr-edit-alt optin-icon"></i>Projects

        </a>
      </div>
      <div className='mobile-option'>
        <a href='#skills'>
        <i class="fi fi-rr-laptop option-icon"></i>Skills

        </a>
      </div>
      <div className='mobile-option'>
        <a href='#work'>
        <i class="fi fi-rr-briefcase option-icon"></i>Experience
        </a>
      </div>
      <div className='mobile-option'>
        <a href='#contact'>
        <i class="fi fi-rr-user option icon"></i>Contact
        </a>
      </div>
    </div>
    </div>
  )
}

export default Mobile