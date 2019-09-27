import React, { useState } from 'react';
import Form from '../../UI/Form/Form';
import Button from '../../UI/Button/Button';

import TextField from '../../UI/Form/TextField';
import ButtonFields from '../../UI/Form/ButtonFields';

function LoginForm(props) {
  const { onSubmit } = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(login, password);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        name="login"
        label="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        labelWhite
        inputWhite
      />
      <TextField
        name="password"
        label="Senha"
        labelWhite
        inputWhite
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ButtonFields lg>
        <Button type="button" sm>Cancelar</Button>
        <Button type="submit" sm primary>Enviar</Button>
      </ButtonFields>
    </Form>
  );
}

export default LoginForm;
