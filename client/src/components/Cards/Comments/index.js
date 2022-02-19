import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLEPOST } from '../../../utils/queries';

import './styles.scss';
import './query.scss';

const Comments = () => {
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLEPOST, {
    variables: { postId: postId },
  });
  const singlePost = data?.singlePost || [];

  return (
    <div className='comments-wrapper'>
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
      </section>
    </div>
  );
};

export default Comments;