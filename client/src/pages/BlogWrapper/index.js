import React from 'react';
import BlogForm from '../../components/BlogForm';
import BlogPost from '../../components/BlogPost';

import './styles.css';
import './query.css';

const BlogWrapper = () => {
  return (
    <main className='blog-wrapper'>
      <BlogForm />
      <BlogPost />
    </main>
  );
};

export default BlogWrapper;