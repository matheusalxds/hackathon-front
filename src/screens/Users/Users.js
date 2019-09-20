import { Redirect, Route, Switch } from 'react-router-dom';
import ScreensUsersSearch from '../Users/Search/Search';
import ScreensUsersCreate from '../Users/Create/Create';

import React from 'react';

function Users(props) {
  return (
    <Switch>
      <Redirect from="/usuarios" exact to="/usuarios/busca" />
      <Route path="/usuarios/busca">
        <ScreensUsersSearch />
      </Route>
      <Route path="/usuarios/novo">
        <ScreensUsersCreate />
      </Route>
    </Switch>
  );
}

export default Users;
