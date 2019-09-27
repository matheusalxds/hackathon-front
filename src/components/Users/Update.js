import React from 'react';
import Content from '../UI/Content/Content';

import Heading from '../UI/Heading/Heading';
import UserForm from './Form/UserForm';

// SHOULD BE A CONTAINER
function Create(props) {
  function handleSubmit(data) {
    console.log('handleSubmit ==>', data);
  }

  const data = {
    name: 'Matheus Alexandre',
    email: 'mathe.system@gmail.com',
    role: 'DEV',
  };

  return (
    <Content>
      <Heading two>
        Editar usuário
      </Heading>
      <UserForm onSubmit={handleSubmit} data={data} />
    </Content>
  );
}

export default Create;
