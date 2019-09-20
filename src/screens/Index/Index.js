import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Content from '../../components/UI/Content/Content';
import Button from '../../components/UI/Button/Button';

// UI components
import SideBar from '../../components/UI/NavBar/SideBar';
import Main from '../../components/UI/Main/Main';

import LoginScreen from '../Auth/Login/Login';
import ScreensTeamsSearch from '../Teams/Search/Search';
import ScreensUsersSearch from '../Users/Users';

const Pag01 = () => (
  <Content>
    <Button danger sm>Opa</Button>
  </Content>
);
const Pag02 = () => <div>02</div>;

function Index(props) {
  const logged = true;
  return logged ? (
    <>
      <SideBar />
      <Main>
        <Switch>
          <Route path="/pag01" exact>
            <Pag01 />
          </Route>
          <Route path="/pag02" exact>
            <Pag02 />
          </Route>
          <Route path="/usuarios">
            <ScreensUsersSearch />
          </Route>
          <Route path="/">
            <ScreensTeamsSearch />
          </Route>
          <Route
            path="/"
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </Main>
    </>
  ) : (
    <Route path="/login" exact>
      <LoginScreen />
    </Route>
  );
}

export default Index;
