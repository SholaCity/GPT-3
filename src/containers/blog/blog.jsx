import React from 'react'
import './blog.css'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'





function blog() {
  
  

  return (
    <div className='gpt3__blog section__margin'>
      <h2 className='gradient__text'>A lot is happening <br/> We are blogging about it.</h2>
      <div className='gpt3__blog-article'>
          <div className='gpt3__blog-article_item main'>
            <img src={blog1} alt='blog one'/>
            <div className='gpt3__blog-article_item-text main'>
              <div className='gpt3__blog-artcle_main-wrap_title main'>
                <p className='date'>
                  Sep 26, 2023
                </p>
                <h2>GPT-3 and OpenAI is the future. Let Us Explore How It is.</h2>
              </div>
              <a href='#'>Read Full Article</a>
            </div>
          </div>
          <div className='gpt3__blog-article_container'>
            <div className='gpt3__blog-article_item'>
              <img src={blog2} alt='blog two'/>
              <div className='gpt3__blog-article_item-text'>
                <div className='gpt3__blog-artcle_main-wrap_title'>
                  <p className='date'>
                    Sep 26, 2023
                  </p>
                  <h2>GPT-3 and OpenAI is the future. Let Us Explore How It is.</h2>
                </div>
                <a href='#'>Read Full Article</a>
              </div>
            </div>
            <div className='gpt3__blog-article_item'>
              <img src={blog3} alt='blog three'/>
              <div className='gpt3__blog-article_item-text'>
                <div className='gpt3__blog-artcle_main-wrap_title'>
                  <p className='date'>
                    Sep 26, 2023
                  </p>
                  <h2>GPT-3 and OpenAI is the future. Let Us Explore How It is.</h2>
                </div>
                <a href='#'>Read Full Article</a>
              </div>
            </div>
          </div>
          <div className='gpt3__blog-article_container'>
            <div className='gpt3__blog-article_item'>
              <img src={blog2} alt='blog two'/>
              <div className='gpt3__blog-article_item-text'>
                <div className='gpt3__blog-artcle_main-wrap_title'>
                  <p className='date'>
                    Sep 26, 2023
                  </p>
                  <h2>GPT-3 and OpenAI is the future. Let Us Explore How It is.</h2>
                </div>
                <a href='#'>Read Full Article</a>
              </div>
            </div>
            <div className='gpt3__blog-article_item'>
              <img src={blog3} alt='blog three'/>
              <div className='gpt3__blog-article_item-text'>
                <div className='gpt3__blog-artcle_main-wrap_title'>
                  <p className='date'>
                    Sep 26, 2023
                  </p>
                  <h2>GPT-3 and OpenAI is the future. Let Us Explore How It is.</h2>
                </div>
                <a href='#'>Read Full Article</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default blog