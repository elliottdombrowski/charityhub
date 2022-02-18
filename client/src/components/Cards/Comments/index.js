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
      comments
    </div>
  );
};
 
export default Comments;