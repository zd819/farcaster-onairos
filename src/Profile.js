// src/Profile.js
import React from 'react';

const Profile = () => {
  // TODO: Replace these with actual data from user state or props
  const userName = 'User Name';
  const userIcon = 'path/to/user/icon'; // Replace with actual path or state

  return (
    <div className="flex items-center">
      <span className="mr-3">{userName}</span>
      <img className="h-8 w-8 rounded-full" src={userIcon} alt="User Icon"/>
    </div>
  );
};

export default Profile;
