import React from "react";

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="card-data">
        <h2 className="heading-secondary">Name Surname</h2>
        <div className="data-email">
          <h3 className="heading-tertiary">Email</h3>
          <p>email@example.com</p>
        </div>
        <div className="data-birthday">
          <h3 className="heading-tertiary">Birthday</h3>
          <p>birthday date</p>
        </div>
      </div>
      <div className="card-buttons">
        <button className="btn btn--delete">Delete</button>
        <button className="btn btn--edit">Edit</button>
      </div>
    </div>
  );
};

export default UserCard;
