import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ toggleShowForm, usersList, selectUser, deleteUser }) => {
  return (
    <div className="users-list grid grid--3-cols">
      {usersList.map(user => (
        <UserCard
          toggleShowForm={toggleShowForm}
          key={user.id}
          user={user}
          selectUser={selectUser}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
};

export default UsersList;
