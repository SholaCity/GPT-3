import React from 'react'
import './whatGPT3.css'

const whatGPT3 = () => {

    const HeadStyle = (props)=>{
      return (<div className='gpt3__whatgpt-head_container'>
      <span className='tick'></span>
      <h2>{props.title}</h2>
    </div>)
    }

    const Features = (props)=>{
      return <>
              <HeadStyle 
              title= {props.title}
              />
              <p className='gpt3__whatgpt-head_description'>{props.description}</p>
      </>
    }


    return (
      <div className='gpt3__whatgpt section__padding section__margin'>
        <div className='gpt3__whatgpt-head'>
          <HeadStyle 
            title= "what is GPT3"
          />
          <p>Boisterous the attachment. 
          Party we years tp order allow asked, Yet bed any for travelling aqssistance indul
          gence unpleasing way everything joy alteration boisterous the attachment. 
          Party we years tp order allow asked</p>
        </div>
        {/*  */}
        <div className='gpt3__whatgpt-possibilty'>
          <h2 className='gradient__text'>The Possibilities are beyond your imagination</h2>
          <a href='#'> Explore the Library</a>
        </div>
        <div className='gpt3__whatgpt-features'>
          <div className='gpt3__whatgpt-features_items'>
            <Features
            title= "ChatBots"
            description= "Yet  any for travelling aqssistance indulgence unpleasing way everything joy alteration boisterous the attachment. Party we years tp order allow asked"
            />
          </div>
          <div className='gpt3__whatgpt-features_items'>
          <Features
            title= "Knowlegeables"
            description= "Yet  any for travelling aqssistance indulgence unpleasing way everything joy alteration boisterous the attachment. Party we years tp order allow asked"
            />
          </div>
          <div className='gpt3__whatgpt-features_items'>
          <Features
            title= "Education"
            description= "Yet  any for travelling aqssistance indulgence unpleasing way everything joy alteration boisterous the attachment. Party we years tp order allow asked"
            />
          </div>
        </div>
      </div>
    )
}

export default whatGPT3