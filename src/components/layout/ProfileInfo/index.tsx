import React from 'react';

import Person from '../../../assets/img/person1.jpg';
import Typing from '../Typing';

const ProfileInfo: React.FC = () => {
  return (
    <>
      <div className="profile-image">
        <Typing />

        <div className="image-board">
          <img src={Person} alt="Profile" />
        </div>
      </div>
      <div className="profile-name">
        <span>Amarilda Curvada</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
