import React, { useState } from 'react';
import LoginBtn from '../LoginBtn';
import Auth from '../../utils/auth';

import './styles.css';
import './query.css';

const BlogForm = () => {
  const [blogPost, setBlogPost] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [err, setErr] = useState('');

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
  
  const postWrapperFunction = (event) => {
    setCharCount(event.target.value.length);
    setBlogPost(event.target.value);

    charCount >= 500 ? setErr('your post is too long!') : charCount >= 450 ? setErr('characters left: ') : setErr('');
  };

  const postSubmit = async (event) => {
    event.preventDefault();

    setBlogPost('');
    setCharCount(0);
    setErr('');
  };

  return (
    <section className='blog-form-wrapper'>
      {Auth.loggedIn() ? (
        <form 
          className='blog-form'
          onSubmit={postSubmit}
        >
          <span className='blog-header-wrapper'>
            <label className='blog-label'>Create a post!</label>
            <span className='blog-char-count-wrapper'>
              <p 
                style={charCount >= 500 ? styles.error : charCount >= 450 ? styles.warning : styles.clear}
                className='blog-char-err'
              >
                {err}
              </p>

              <p 
                style={charCount >= 500 ? styles.error : charCount >= 450 ? styles.warning : styles.clear}
                className='blog-char-count'
              >
                {charCount} / 500
              </p>
            </span>
          </span>
          <textarea 
            className='blog-textarea'
            value={blogPost}
            onChange={postWrapperFunction}
          />

          <div className='blog-post-btn-wrapper'>
            <button
              type='submit'
              className='blog-post-btn'
            >
              Submit Post!
            </button>
          </div>
        </form>
      ) : (
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