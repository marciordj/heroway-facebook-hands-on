import React from 'react';

import Post from './Post';
import ProfileSidebar from './ProfileSidebar';

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="container">
          <Post />
        </div>
      </div>
      <ProfileSidebar />
    </>
  );
};

export default Feed;
