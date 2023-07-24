import React from 'react'
import './header.css'
import peopleIcon from '../../assets/people.png';
import AIIcon from '../../assets/ai.png';


const header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing
        with GPT-3 OpenAI</h1>
        <p> Yet bed any for travelling aqssistance indul
        gence unpleasing way everything joy alteration boisterous the attachment. 
        Party we years tp order allow asked</p>

        <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your email' />
            <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={peopleIcon} alt='people using the AI' />
          <p className='gpt3__header-content__peopple-text'> 1,600 people requested access in the last 24hrs</p>
        </div>
      </div>
      <img className='gpt3__header-image' src={AIIcon} alt='AI icon' />
    </div>
  )
}

export default header