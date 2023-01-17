import React from 'react';

const UserCard = ({ toggleIsHidden }) => {
  return (
    <div className="user-card">
      <div className="card-data">
        <h2 className="heading-secondary">Name Surname</h2>
        <div className="data-container">
          <h3 className="heading-tertiary">Email</h3>
          <p>email@example.com</p>
        </div>
        <div className="data-container">
          <h3 className="heading-tertiary">Birthday</h3>
          <p>birthday date</p>
        </div>
      </div>
      <div className="button-container flex">
        <button className="btn btn--delete">
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="btn btn--edit" onClick={toggleIsHidden}>
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
