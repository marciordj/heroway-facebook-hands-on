import React from 'react';

import { ReactComponent as CommentIcon } from '../../../../../assets/img/comment.svg';
import { ReactComponent as LikeIcon } from '../../../../../assets/img/like.svg';

const PostAction: React.FC = () => {
  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <LikeIcon />
        <span>3 Likes</span>
      </div>
      <div className="post-comment-icon commented">
        <CommentIcon />
        <span>1 Comment</span>
      </div>
    </div>
  );
};

export default PostAction;
