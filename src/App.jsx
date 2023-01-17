import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './assets/components/Header';
import UsersList from './assets/components/UsersList';
import Pagination from './assets/components/Pagination';
import UsersSearch from './assets/components/UsersSearch';
import UsersForm from './assets/components/UsersForm';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  };

  const addUser = user => {
    axios
      .post('https://users-crud.academlo.tech/users/', user)
      .then(() => {
        getUsers();
        deselectUser();
      })
      .catch(error => console.error(error.response?.data));
  };

  const updateUser = user => {
    axios
      .put(`https://users-crud.academlo.tech/users/${userSelected?.id}/`, user)
      .then(() => {
        getUsers();
        deselectUser();
      })
      .catch(error => console.error(error.response?.data));
  };

  const deleteUser = user => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${user?.id}/`)
      .then(() => {
        getUsers();
      });
  };

  const selectUser = user => {
    setUserSelected(user);
  };

  const deselectUser = () => {
    setUserSelected(null);
  };

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="App">
      <header>
        <Header toggleIsHidden={toggleIsHidden} />
      </header>
      <main>
        <section className="section-search">
          <UsersSearch />
        </section>
        <section className="section-users">
          <UsersList
            toggleIsHidden={toggleIsHidden}
            usersList={usersList}
            selectUser={selectUser}
            deleteUser={deleteUser}
          />
          <Pagination />
        </section>
        <section className="section-form">
          <div className={`modal ${isHidden ? 'hidden' : ''}`}>
            <UsersForm
              toggleIsHidden={toggleIsHidden}
              addUser={addUser}
              updateUser={updateUser}
              userSelected={userSelected}
              deselectUser={deselectUser}
            />
          </div>
          <div className={`overlay ${isHidden ? 'hidden' : ''}`}></div>
        </section>
      </main>
    </div>
  );
}

export default App;
