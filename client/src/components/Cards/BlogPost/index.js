import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Auth from '../../../utils/auth';

import CommentIcon from '../../Icons/CommentIcon/';
import ThumbsUpIcon from '../../Icons/ThumbsUpIcon/';
import ThumbsDownIcon from '../../Icons/ThumbsDownIcon/';
import BookmarkIcon from '../../Icons/BookmarkIcon/';

import { useQuery } from '@apollo/client';
import { QUERY_ALLPOSTS } from '../../../utils/queries';

import './styles.scss';
import './query.scss';

const BlogPost = () => {

  const { loading, data } = useQuery(QUERY_ALLPOSTS);
  const blogPosts = data?.allPosts || [];

  return (
    <section className='blog-post-wrapper'>
      {
        blogPosts.map((singlePost) => {
          return (
            <section className='single-blog-post' key={singlePost._id}>
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

              <span className='blog-post-toolbar-wrapper'>
                <ul className='blog-post-toolbar-left'>
                  <BookmarkIcon />
                </ul>

                <ul className='blog-post-toolbar-right'>
                  <ThumbsUpIcon />
                  <ThumbsDownIcon />

                  <Link to={`/comments/${singlePost._id}`} className='blog-post-comment-icon'>
                    <CommentIcon />
                  </Link>
                </ul>
              </span>

              <section className='single-blog-post-comments'>
                <h1>
                </h1>
              </section>
            </section>
          );
        })
      }
    </section>
  );
};

export default BlogPost;