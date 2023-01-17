import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ toggleIsHidden }) => {
  return (
    <div className="users-list grid grid--3-cols">
      <UserCard toggleIsHidden={toggleIsHidden} />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default UsersList;
