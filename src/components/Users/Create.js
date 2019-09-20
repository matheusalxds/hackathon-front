import React from 'react';
import Content from '../UI/Content/Content';

import Heading from '../UI/Heading/Heading';
import UserForm from './Form/UserForm';

// SHOULD BE A CONTAINER
function Create(props) {
  function handleSubmit(data) {
    console.log('handleSubmit ==>', data);
  }

  return (
    <Content>
      <Heading two>
        Novo usuário
      </Heading>
      <UserForm onSubmit={handleSubmit} />
    </Content>
  );
}

export default Create;
