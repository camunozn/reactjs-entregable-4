import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ toggleIsHidden, usersList, selectUser }) => {
  return (
    <div className="users-list grid grid--3-cols">
      {usersList.map(user => (
        <UserCard
          toggleIsHidden={toggleIsHidden}
          key={user.id}
          user={user}
          selectUser={selectUser}
        />
      ))}
    </div>
  );
};

export default UsersList;
