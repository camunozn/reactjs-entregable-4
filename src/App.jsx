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
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    axios
      .get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  }, []);

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
          <UsersList toggleIsHidden={toggleIsHidden} />
          <Pagination />
        </section>
        <section className="section-form">
          <div className={`modal ${isHidden ? 'hidden' : ''}`}>
            <UsersForm toggleIsHidden={toggleIsHidden} />
          </div>
          <div className={`overlay ${isHidden ? 'hidden' : ''}`}></div>
        </section>
      </main>
    </div>
  );
}

export default App;
