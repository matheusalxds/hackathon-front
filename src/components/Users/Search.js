import React from 'react';
import SearchForm from './Form/Search';
import List from './List/UserList';
import Heading from '../UI/Heading/Heading';

function Search(props) {
  return (
    <div>
      <Heading two>
        Usuários
      </Heading>
      <SearchForm />
      <List />
    </div>
  );
}

export default Search;
