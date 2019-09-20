import React from 'react';
import SearchForm from './Form/Search';
import List from './List/UserList';

function Search(props) {
  return (
    <div>
      <h2>
        Usuarios
      </h2>
      <SearchForm />
      <List />
    </div>
  );
}

export default Search;
