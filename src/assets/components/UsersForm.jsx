import React, { useEffect, useState } from 'react';

const UsersForm = ({
  toggleShowForm,
  addUser,
  updateUser,
  userSelected,
  deselectUser,
}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    if (userSelected) {
      setName(userSelected.first_name);
      setSurname(userSelected.last_name);
      setEmail(userSelected.email);
      setBirthday(userSelected.birthday);
    } else {
      resetFields();
    }
  }, [userSelected]);

  const submit = e => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      first_name: name,
      last_name: surname,
      birthday: birthday,
    };
    if (userSelected) {
      updateUser(user);
      toggleShowForm();
    } else {
      addUser(user);
      toggleShowForm();
      resetFields();
    }
  };

  const resetFields = () => {
    setName('');
    setSurname('');
    setEmail('');
    setPassword('');
    setBirthday('');
  };

  return (
    <div className="users-form">
      <h2 className="heading-secondary">
        {!userSelected ? 'New User' : 'Edit User'}
      </h2>
      <button
        className="btn btn--close"
        onClick={() => {
          toggleShowForm();
          deselectUser();
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <form onSubmit={submit}>
        <div className="name-container flex">
          <div className="input-container">
            <label htmlFor="name">
              <i className="fa-solid fa-user"></i>
            </label>
            <input
              required
              placeholder="Name"
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="surname"></label>
            <input
              required
              placeholder="Last Name"
              type="text"
              id="surname"
              value={surname}
              onChange={e => setSurname(e.target.value)}
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input
            required
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input
            required
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            // disabled={userSelected ? true : false}
          />
        </div>
        <div className="input-container">
          <label htmlFor="birthday">
            <i className="fa-solid fa-cake-candles"></i>
          </label>
          <input
            required
            placeholder="Birthday date"
            type="date"
            id="birthday"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
          />
        </div>
        <button className="btn btn--form">
          {!userSelected ? 'Create User' : 'Update User'}
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
