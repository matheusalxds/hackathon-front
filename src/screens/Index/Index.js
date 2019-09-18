import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// UI components
import SideBar from '../../components/UI/NavBar/SideBar';
import Main from '../../components/UI/Main/Main';

import LoginScreen from '../Auth/Login/Login';
import ScreensTeamsSearch from '../Teams/Search/Search';

const Pag01 = () => <div>01</div>;
const Pag02 = () => <div>02</div>;
const Pag03 = () => <div>03</div>;

function Index(props) {
  return (
    <>
      <SideBar />
      <Main>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/pag01">
            <Pag01/>
          </Route>
          <Route path="/pag02">
            <Pag02/>
          </Route>
          <Route path="/pag03">
            <Pag03/>
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
  );
}

export default Index;
