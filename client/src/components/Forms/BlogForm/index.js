import React, { useState } from 'react';

// IMPORT AUTH UTILS 
import Auth from '../../../utils/auth';

//IMPORT COMPONENTS 
import LoginBtn from '../../Btns/LoginBtn/';

import './styles.scss';
import './query.scss';

const BlogForm = () => {
  //CREATE BLOG POST DATA STATE OBJECT
  const [blogPostData, setBlogPostData] = useState({
    blog_author: '',
    blog_title: '',
    blog_body: '',
    blog_category: '',
  });

  //STATE FOR CHARACTER COUNT, DEFAULT TO 0
  const [charCount, setCharCount] = useState(0);
  //ERROR STATE
  const [err, setErr] = useState('');

  //DYNAMIC CSS TO RENDER ERROR TEXT COLORS
  const styles = {
    clear: {
      color: 'black',
    },
    warning: {
      color: 'yellow',
    },
    error: {
      color: 'red',
    }
  }

  const handleBlogInputChange = (event) => {
    //ON INPUT CHANGE, SET BLOG POST DATA STATE 
    const { name, value } = event.target;
    setBlogPostData({ ...blogPostData, [name]: value });

    //SET CHARACTER COUNT STATE AS LENGTH OF INPUT VALUE
    setCharCount(event.target.value.length);

    // IF CHARACTER COUNT VALUE IS GREATER THAN / EQUAL TO 500 CHARACTERS, SET ERROR STATE MESSAGE
    // ELSE, RESET ERROR STATE VALUE
    charCount >= 500 ? setErr('your post is too long!') : setErr('');
  };

  const postSubmit = async (event) => {
    event.preventDefault();

    //TODO- POST SUBMIT MUTATION LOGIC 

    //RESET ALL STATE
    setBlogPostData('');
    setCharCount(0);
    setErr('');
  };

  return (
    <section className='blog-form-wrapper'>
      {/* 
      RENDER BLOG POST CREATE FORM IF LOGGED IN
      ELSE RENDER PROMPT TO LOG IN 
      */}

      {Auth.loggedIn() ? (
        <form 
          className='blog-form'
          onSubmit={postSubmit}
        >
          <span className='blog-header-wrapper'>
            <label className='blog-label'>Create a post!</label>

            {/* WRAPPER FOR ERROR MESSAGE. DYNAMIC CSS CHANGES COLOR BASED ON CHARACTER STATE VALUE  */}
            <span className='blog-char-count-wrapper'>
              {/* RENDER ERROR MESSAGE  */}
              <p
                style={charCount >= 500 ? styles.error : styles.clear}
                className='blog-char-err'
              >
                {err}
              </p>

              {/* RENDER CHARACTER COUNTER  */}
              <p 
                style={charCount >= 500 ? styles.error : charCount >= 450 ? styles.warning : styles.clear}
                className='blog-char-count'
              >
                {charCount} / 500
              </p>
            </span>
          </span>

          {/* BLOG TITLE INPUT  */}
          <input
            type='text'
            name='blog_title'
            onChange={handleBlogInputChange}
            value={blogPostData.blog_title}
            placeholder='Post Title'
            required
            className='blog-title-input'
          />

          {/* BLOG BODY INPUT  */}
          <textarea 
            className='blog-textarea'
            name='blog_body'
            value={blogPostData.blog_body}
            onChange={handleBlogInputChange}
            required
            placeholder='Write your post!'
          />

          <div className='blog-post-btn-wrapper'>
            {/* SELECT BLOG CATEGORY  */}
            <select
              type='text'
              name='category'
              onChange={handleBlogInputChange}
              value={blogPostData.blog_category}
              required
              className='blog-category-select'
            >
              <option value="" defaultValue disabled hidden>Choose a Category</option>
              <option value="1">OPTION ONE</option>
              <option value="2">OPTION TWO</option>
              <option value="3">OPTION THREE</option>
              <option value="4">OPTION FOUR</option>
              <option value="5">OPTION FIVE</option>
            </select>

            {/* BLOG POST SUBMIT  */}
            <button
              type='submit'
              className='blog-post-btn'
              // disabled={!(blogPostData.blog_title && blogPostData.body && blogPostData.blog_category)}
              onSubmit={postSubmit}
            >
              Submit Post!
            </button>
          </div>
        </form>
      ) : (
      // RENDER PROMPT TO LOG IN IF NOT LOGGED IN 
       <span className='blog-prompt-sign-in'>
         <h1 className='blog-prompt-sign-in-header'>
          Log In to create or comment on posts!
         </h1>

         <LoginBtn />
       </span>
      )}
    </section>
  );
};

export default BlogForm;