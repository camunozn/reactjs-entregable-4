import React from "react";

const UsersForm = () => {
  return (
    <div className="users-form">
      <h2>New User</h2>
      <form>
        <div className="input-container">
          <label htmlFor="name"></label>
          <input placeholder="Name" type="text" id="name" />
        </div>
        <div className="input-container">
          <label htmlFor="surname"></label>
          <input placeholder="Last Name" type="text" id="surname" />
        </div>
        <div className="input-container">
          <label htmlFor="email"></label>
          <input placeholder="Email" type="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password"></label>
          <input placeholder="Password" type="password" id="password" />
        </div>
        <div className="input-container">
          <label htmlFor="birthday"></label>
          <input placeholder="Birthday date" type="date" id="birthday" />
        </div>
        <button className="btn btn--form">Create user</button>
      </form>
    </div>
  );
};

export default UsersForm;
