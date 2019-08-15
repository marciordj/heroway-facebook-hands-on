import React from 'react';

import PostImage from '../../../../../assets/img/post-image.jpg';

const PostContent: React.FC = () => {
  return (
    <>
      <div className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend id massa quis
        condimentum. Maecenas malesuada, mi id tempus consequat, ex nunc rhoncus arcu, at vehicula
        lorem mi eu magna.
      </div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={PostImage} alt="Profile" />
        </div>
      </div>
    </>
  );
};

export default PostContent;
