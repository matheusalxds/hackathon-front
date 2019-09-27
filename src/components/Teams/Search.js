import React from 'react';
import SearchForm from './Form/Search';
import List from './List/TeamList';
import Heading from '../UI/Heading/Heading';

function Search(props) {
  return (
    <div>
      <Heading two>
        Times
      </Heading>
      <SearchForm />
      <List />
    </div>
  );
}

export default Search;
