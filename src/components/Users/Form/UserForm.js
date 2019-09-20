import React, { useState } from 'react';
import Form from '../../UI/Form/Form';
import TextField from '../../UI/Form/TextField';
import ButtonFields from '../../UI/Form/ButtonFields';
import Button from '../../UI/Button/Button';


function UserForm(props) {
  const { onSubmit } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const preparedData = {};
    if (name) preparedData.name = name;
    if (email) preparedData.email = email;
    if (role) preparedData.role = role;

    onSubmit(preparedData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        required
        name="name"
        label="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        required
        name="email"
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        required
        name="role"
        label="Função"
        value={role}
        onChange={e => setRole(e.target.value)}
      />
      <ButtonFields lg>
        <Button lg>Cancelar</Button>
        <Button primary lg>Enviar</Button>
      </ButtonFields>
    </Form>
  );
}

export default UserForm;
