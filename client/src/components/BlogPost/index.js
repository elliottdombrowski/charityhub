import React from 'react';
import { Link } from 'react-router-dom';
import CommentIcon from '../CommentIcon';

import './styles.css';
import './query.css';

let dummyPosts = [
  {
    id: 1,
    author: 'dummy one',
    title: 'post one',
    body: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    id: 2,
    author: 'dummy two',
    title: 'post two',
    body: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    id: 3,
    author: 'dummy three',
    title: 'post three',
    body: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    id: 4,
    author: 'dummy four',
    title: 'post four',
    body: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
];

const BlogPost = () => {
  return (
    <section className='blog-post-wrapper'>
      {
        dummyPosts.map((singlePost) => {
          return (
            <section className='single-blog-post' key={singlePost.id}>
              <div className='blog-post-header-wrapper'>
                <h1 className='blog-post-title'>
                  {singlePost.title}
                </h1>
                <h2 className='blog-post-author'>
                  {singlePost.author}
                </h2>
              </div>

              <p className='blog-post-body'>
                {singlePost.body}
              </p>

              <span className='blog-post-toolbar'>
                <Link to='/blog:id' className='blog-post-comment-icon'>
                  <CommentIcon />
                </Link>
              </span>
            </section>
          );
        })
      }
    </section>
  );
};

export default BlogPost;