import React from 'react';
import BlogForm from '../../components/Forms/BlogForm';
import BlogPost from '../../components/Cards/BlogPost';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import './query.scss';

const searchIcon = <FontAwesomeIcon icon={faSearch} className='fa-2x blog-search-icon' />

const BlogWrapper = () => {
  return (
    <main className='blog-wrapper'>
      <BlogForm />
      
      <form className='blog-search-bar-form'>
        <h1 className='blog-search-label'>
          Search for your favorite posts.
        </h1>

        <div className='blog-search-bar-wrapper'>
          <input 
            type='text'
            className='blog-search-bar'
          ></input>

          <button
            type='submit'
            className='blog-search-icon-btn'>
              {searchIcon}
            </button>
        </div>
      </form>

      <BlogPost />
    </main>
  );
};

export default BlogWrapper;