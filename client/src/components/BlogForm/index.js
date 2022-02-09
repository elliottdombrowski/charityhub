import React, { useState } from 'react';
import LoginBtn from '../LoginBtn';
import Auth from '../../utils/auth';

import './styles.css';
import './query.css';

const BlogForm = () => {
  const [blogPostData, setBlogPostData] = useState({
    blog_author: '',
    blog_title: '',
    blog_body: '',
    blog_category: '',
  });

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
    setBlogPostData(event.target.value);

    charCount >= 500 ? setErr('your post is too long!') : setErr('');
  };

  const handleBlogInputChange = (event) => {
    const { name, value } = event.target;
    setBlogPostData({ ...blogPostData, [name]: value });
  };

  const postSubmit = async (event) => {
    event.preventDefault();

    setBlogPostData('');
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
                style={charCount >= 500 ? styles.error : styles.clear}
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
            value={blogPostData.blog_body}
            onChange={postWrapperFunction}
          />

          <div className='blog-post-btn-wrapper'>
            <select
              type='text'
              name='category'
              onChange={handleBlogInputChange}
              value={blogPostData.blog_category}
              required
              className='blog-category-select'
            >
              <option value="" selected disabled hidden>Choose a Category</option>
              <option value="1">OPTION ONE</option>
              <option value="2">OPTION TWO</option>
              <option value="3">OPTION THREE</option>
              <option value="4">OPTION FOUR</option>
              <option value="5">OPTION FIVE</option>
            </select>

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