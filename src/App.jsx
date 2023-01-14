import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import UsersList from "./assets/components/UsersList";
import Pagination from "./assets/components/Pagination";
import UsersSearch from "./assets/components/UsersSearch";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section className="section-search">
          <UsersSearch />
        </section>
        <section className="section-users">
          <UsersList />
          <Pagination />
        </section>
      </main>
    </div>
  );
}

export default App;
