import React from "react";

import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const commentIcon = <FontAwesomeIcon icon={faComment} className="fa-2x" />

const CommentIcon = () => {
  return (
    <li className="nav-item comment-icon">
      {commentIcon}
    </li>
  );
};

export default CommentIcon;