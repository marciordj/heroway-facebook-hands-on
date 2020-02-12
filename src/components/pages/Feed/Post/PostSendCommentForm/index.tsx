import React from 'react';
import * as ReactRedux from 'react-redux';
import { setUserTyping } from '../../../../../redux/reducers/profile';

let timeoutId: any = undefined;
const PostSendCommentForm: React.FC = () => {
  const dispatch = ReactRedux.useDispatch();

  function saveComment(event) {
    if (event.key === 'Enter') {
      console.log('apertou enter!');
    }
  }

  function handleTyping() {
    const isTypingAction = setUserTyping(true);
    dispatch(isTypingAction);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(setUserTyping(false));
    }, 1000);
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input
          type="text"
          placeholder="Write your comment"
          onChange={handleTyping}
          onKeyPress={saveComment}
        />
      </div>
    </div>
  );
};

export default PostSendCommentForm;
