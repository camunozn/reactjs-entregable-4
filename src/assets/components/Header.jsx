import React from 'react';

const Header = ({ toggleShowForm }) => {
  return (
    <div className="header flex">
      <h1 className="heading-primary">Users</h1>
      <button className="btn btn--user" onClick={toggleShowForm}>
        + create new user
      </button>
    </div>
  );
};

export default Header;
