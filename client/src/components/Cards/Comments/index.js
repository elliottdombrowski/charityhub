import React from 'react';
import { Link, useParams } from 'react-router-dom';

//IMPORT COMPONENTS
import AnimatePage from '../../../AnimatePage';
import BackBtn from '../../Btns/BackBtn';
import ThumbsUpIcon from '../../Icons/ThumbsUpIcon';
import ThumbsDownIcon from '../../Icons/ThumbsDownIcon';
import CommentIcon from '../../Icons/CommentIcon';

//IMPORT GQL QUERIES
import { useQuery } from '@apollo/client';
import { QUERY_SINGLEPOST, QUERY_ALLCOMMENTS } from '../../../utils/queries';

import './styles.scss';
import './query.scss';

const Comments = () => {
  const { postId } = useParams();
  //CALL SINGLEPOST QUERY TO FIND POST BY ID
  const { loading: singlePostLoading, data: singlePostData } = useQuery(QUERY_SINGLEPOST, {
    variables: { postId: postId },
  });
  const singlePost = singlePostData?.singlePost || [];

  //CALL ALLCOMMENTS QUERY, RETURNS ALL COMMENTS
  const { loading: allCommentsLoading, data: allCommentsData } = useQuery(QUERY_ALLCOMMENTS);
  const allComments = allCommentsData?.allComments || [];

  //ON COMMENT ICON CLICK, TOGGLE SHOW/HIDE COMMENT REPLY MODAL
  const showCommentBox = () => {
    document.getElementById('comment-replies').classList.toggle('active');
  };

  return (
    <AnimatePage>
      {/* RENDER SINGLE BLOG POST  */}
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

      {/* RENDER/MAP ALL COMMENTS  */}
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

                  <div onClick={showCommentBox}>
                    <CommentIcon />
                  </div>
                </span>

                {/* COMMENT REPLY MODAL  */}
                <div className='comment-textbox' id='comment-replies'>
                  <form>
                    <input 
                      type='text'
                      className='comment-reply-input'
                    />
                  </form>
                </div>
              </div>
            );
          })
        }
      </div>

      {/* BACK TO BLOG PAGE BTN  */}
      <BackBtn />
    </AnimatePage>
  );
};

export default Comments;