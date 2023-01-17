import React, { useState } from 'react';

const UsersForm = ({ toggleIsHidden, isNewUser }) => {
  return (
    <div className="users-form">
      <h2 className="heading-secondary">
        {isNewUser ? 'New User' : 'Edit User'}
      </h2>
      <button className="btn btn--close" onClick={toggleIsHidden}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <form>
        <div className="name-container flex">
          <div className="input-container">
            <label htmlFor="name">
              <i className="fa-solid fa-user"></i>
            </label>
            <input placeholder="Name" type="text" id="name" />
          </div>
          <div className="input-container">
            <label htmlFor="surname"></label>
            <input placeholder="Last Name" type="text" id="surname" />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input placeholder="Email" type="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input placeholder="Password" type="password" id="password" />
        </div>
        <div className="input-container">
          <label htmlFor="birthday">
            <i className="fa-solid fa-cake-candles"></i>
          </label>
          <input placeholder="Birthday date" type="date" id="birthday" />
        </div>
        <button className="btn btn--form">
          {isNewUser ? 'Create User' : 'Update User'}
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
