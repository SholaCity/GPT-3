import React from 'react'
import './features.css'
import Content from './content'

const features = () => {

  const Feature = (props)=>{
    return (
      <div className='gpt3__features-container_items'>
          <div className='gpt3__features-container_items-title'>
            <span className='tick'></span>
            <h3>{props.title}</h3>
          </div>
          <p>{props.description}</p>
        </div>
    )
  }

  const CreateFeatures= (contentTerm)=> {
    return <Feature
      key= {contentTerm.id}
      title= {contentTerm.title}
      description={contentTerm.description}
    />
  }



  return (
    <div className='gpt3__features '>
      <div className='gpt3__features-head'>
        <h2 className='gradient__text'>The Future is Now and You Just Need To Realize It. 
        Step Into Your Future & Make It Happen.</h2>
          <a href='#'> Request Early Access To Get Started</a>
      </div>
      <div className='gpt3__features-container'>        
        {Content.map(CreateFeatures)}
      </div>
    </div>
      )
}

export default features