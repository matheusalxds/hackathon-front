import React from 'react';
import { withRouter } from 'react-router-dom';

import css from './Login.module.scss';
import Form from './Form/Form';

function Login(props) {
  const { history } = props;
  const user = {
    login: 'matheus',
    password: 'matheus',
  };

  function handleSubmit(login, password) {
    if (login === user.login && password === user.password) {
      history.push('/');
    }
  }

  return (
    <div className={css.login}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default withRouter(Login);
