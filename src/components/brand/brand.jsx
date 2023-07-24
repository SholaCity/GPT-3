import React from 'react'
import './brand.css'
import Google from '../../assets/google.png'
import Slack from '../../assets/slack.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'



const brand = () => {
  return (
    <div className='gpt3__brands section__padding section__margin'>
    <div className='gpt3__brands--icons'>
      <img src= {Google} alt='Google icon'/>
    </div>
    <div className='gpt3__brands--icons'>
      <img src= {Slack} alt='Slack icon'/>
    </div>
    <div className='gpt3__brands--icons'>
      <img src= {Atlassian} alt='Atlassian icon'/>
    </div>
    <div className='gpt3__brands--icons'>
      <img src= {Dropbox} alt='Dropbox icon'/>
    </div>
    <div className='gpt3__brands--icons'>
      <img src= {Shopify} alt='Shopify icon'/>
    </div>

    </div>
  )
}

export default brand