import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './assets/components/Header';
import UsersList from './assets/components/UsersList';
import Pagination from './assets/components/Pagination';
import UsersSearch from './assets/components/UsersSearch';
import UsersForm from './assets/components/UsersForm';
import Alert from './assets/components/Alert';

function App() {
  //////////////////////////////////////////////////////////////
  // Declarations
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [isOverlayHidden, setIsOverlayHidden] = useState(true);

  //////////////////////////////////////////////////////////////
  // Get existing users on app initialization
  useEffect(() => {
    getUsers();
  }, []);

  //////////////////////////////////////////////////////////////
  // API Calls
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
        displayAlert('success', 'User created successfully');
      })
      .catch(error => {
        console.error(error);
        displayAlert('error', error.message);
      });
  };

  const updateUser = user => {
    axios
      .put(`https://users-crud.academlo.tech/users/${userSelected?.id}/`, user)
      .then(() => {
        getUsers();
        deselectUser();
        displayAlert('success', 'User updated successfully');
      })
      .catch(error => {
        console.error(error);
        displayAlert('error', error.message);
      });
  };

  const deleteUser = user => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${user?.id}/`)
      .then(() => {
        getUsers();
        displayAlert('success', 'User deleted successfully');
      })
      .catch(error => {
        console.error(error);
        displayAlert('error', error.message);
      });
  };

  //////////////////////////////////////////////////////////////
  // Helper functions
  const selectUser = user => {
    setUserSelected(user);
  };

  const deselectUser = () => {
    setUserSelected(null);
  };

  const toggleShowForm = () => {
    setIsFormHidden(!isFormHidden);
    setIsOverlayHidden(!isOverlayHidden);
  };

  const displayAlert = (type, message) => {
    // Set alert variables
    setAlertType(type);
    setAlertMessage(message);
    // Display alert and overlay
    setShowAlert(true);
    setIsOverlayHidden(false);
    // Hide alert
    setTimeout(() => {
      setShowAlert(false);
      setIsOverlayHidden(true);
    }, 3000);
  };

  return (
    <div className="App">
      <header>
        <Header toggleShowForm={toggleShowForm} />
      </header>
      <main>
        <section className="section-search">
          <UsersSearch />
        </section>
        <section className="section-users">
          <UsersList
            toggleShowForm={toggleShowForm}
            usersList={usersList}
            selectUser={selectUser}
            deleteUser={deleteUser}
            displayAlert={displayAlert}
          />
          <Pagination />
        </section>
        <section className="section-form">
          <div className={`modal ${isFormHidden ? 'hidden' : ''}`}>
            <UsersForm
              toggleShowForm={toggleShowForm}
              addUser={addUser}
              updateUser={updateUser}
              userSelected={userSelected}
              deselectUser={deselectUser}
              displayAlert={displayAlert}
            />
          </div>
          <div className={`alert  ${showAlert ? '' : 'hidden'}`}>
            <Alert alertType={alertType} alertMessage={alertMessage} />
          </div>
          <div className={`overlay ${isOverlayHidden ? 'hidden' : ''}`}></div>
        </section>
      </main>
    </div>
  );
}

export default App;
