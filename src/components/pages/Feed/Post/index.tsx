import React from 'react';

import PostAction from './PostAction';
import PostComments from './PostComments';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostSendCommentForm from './PostSendCommentForm';

const Post: React.FC = () => {
  return (
    <div className="post">
      <PostHeader />
      <PostContent />
      <PostAction />
      <PostComments />
      <PostSendCommentForm />
    </div>
  );
};

export default Post;
