import React, { useState } from 'react';
import Auth from '../../utils/auth';

import './styles.css';
import './query.css';

const BlogForm = () => {
  const [blogPost, setBlogPost] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [err, setErr] = useState('');

  const styles = {
    clear: {
      color: 'white',
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
  };

  const postSubmit = async (event) => {
    event.preventDefault();

    setBlogPost('');
    setCharCount(0);
    setErr('');
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <form 
          className='blog-form-wrapper'
          onSubmit={postSubmit}
        >
          <span className='blog-header-wrapper'>
            <label className='blog-label'>Create a post!</label>
            <span className='blog-char-count-wrapper'>
              <p className='blog-char-err'>
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
        </form>
      ) : (
       <></> 
      )}
    </>
  );
};

export default BlogForm;