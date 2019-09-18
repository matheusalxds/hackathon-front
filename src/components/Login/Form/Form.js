import React, { useState } from 'react';
import { TextInput, Button } from 'react-materialize';

function LoginForm(props) {
  const { onSubmit } = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(login, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Nome" onChange={(e) => setLogin(e.target.value)} />
      <TextInput label="Senha" onChange={(e) => setPassword(e.target.value)} />
      <Button type="button" small flat waves="red">Cancelar</Button>
      <Button type="submit" small>Enviar</Button>
    </form>
  );
}

export default LoginForm;
