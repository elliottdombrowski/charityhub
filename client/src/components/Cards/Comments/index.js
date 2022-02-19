import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AnimatePage from '../../../AnimatePage';
import BackBtn from '../../Btns/BackBtn';
import ThumbsUpIcon from '../../Icons/ThumbsUpIcon';
import ThumbsDownIcon from '../../Icons/ThumbsDownIcon';
import CommentIcon from '../../Icons/CommentIcon';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLEPOST, QUERY_ALLCOMMENTS } from '../../../utils/queries';

import './styles.scss';
import './query.scss';

const dummyComments = [
  {
    id: 1,
    commentAuthor: 'dummy one',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    commentAuthor: 'dummy two',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    commentAuthor: 'dummy three',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    commentAuthor: 'dummy four',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    commentAuthor: 'dummy five',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 6,
    commentAuthor: 'dummy six',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 7,
    commentAuthor: 'dummy seven',
    commentBody: 'lorem ipsum dolor sit amet',
  },
  {
    id: 8,
    commentAuthor: 'dummy eight',
    commentBody: 'lorem ipsum dolor sit amet',
  },
];

const Comments = () => {
  const { postId } = useParams();

  const { loading: singlePostLoading, data: singlePostData } = useQuery(QUERY_SINGLEPOST, {
    variables: { postId: postId },
  });
  const singlePost = singlePostData?.singlePost || [];

  const { loading: allCommentsLoading, data: allCommentsData } = useQuery(QUERY_ALLCOMMENTS);
  const allComments = allCommentsData?.allComments || [];
  console.log('all comments- ', allComments);

  return (
    <AnimatePage>
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

      <div>
        {
          allComments.map((singleComment) => {
            return (
              <div className='single-comment' key={singleComment._id}>
                <span className='comment-header-wrapper'>
                  <h1>{singleComment.commentAuthor}</h1>
                  {/* <p>{singleComment.commentCreatedAt}</p> */}
                </span>
                <h2>{singleComment.commentBody}</h2>
                <span className='comment-toolbar'>
                  <div className='comment-vote-wrapper'>
                    <div>
                      <ThumbsUpIcon />
                    </div>

                    <div>
                      <ThumbsDownIcon />
                    </div>
                  </div>

                  <div>
                    <CommentIcon />
                  </div>
                </span>
                <div className='comment-textbox'>
                </div>
              </div>
            );
          })
        }
      </div>
      <BackBtn />
    </AnimatePage>
  );
};

export default Comments;