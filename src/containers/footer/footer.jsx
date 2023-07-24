import React from 'react'
import './footer.css'


const footer = () => {
  return (
    <div className='gtp3__footer section__padding'>
      <div className='gtp3__footer-cta'>
        <h1 className='gradient__text'>Do you want to step into the <br/> future before others</h1>
        <input value="Request Early Access" type='button' className='gtp3__footer-cta_button'/>
      </div>
      <div className='gtp3__footer-container'>
        <div className='gtp3__footer-container_logo'>
          <h2> GPT-3</h2>
          <p>Entrance 10, Heavens Gate, Heaven</p>
        </div>

        <div className='gtp3__footer-container_item'>
            <h4>Links</h4>
            <div className='gtp3__footer-container_item-links'>
              <p>Overans</p>
              <p>Social Media</p>
              <p>Contact</p>
              <p>Developer</p>
            </div>
          </div>
          <div className='gtp3__footer-container_item'>
            <h4>Company</h4>
            <div className='gtp3__footer-container_item-links'>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Counters</p>
            </div>
          </div>
          <div className='gtp3__footer-container_item'>
            <h4>Get in Touch</h4>
            <div className='gtp3__footer-container_item-links'>
              <p>Entrance 10, Heavens Gate, Heaven</p>
              <p>Holy Spirit</p>
              <p>heavensdesk@Spiritmail.universe</p>
            </div>
          </div>
        </div>
      <div className='gtp3__footer-copyright gradient__bg'>
      <p>Designed by: <a  href='#' className='gradient__text'> JavaScript Mastery</a></p>
      <p>Developed by: <a href='#' className='gradient__text'> Nwoko Victor</a></p>
      </div>
    </div>
  )
}

export default footer