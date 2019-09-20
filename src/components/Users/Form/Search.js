import React, { useState } from 'react';

import Form from '../../UI/Form/Form';
import TextField from '../../UI/Form/TextField';
import ButtonFields from '../../UI/Form/ButtonFields';
import Button from '../../UI/Button/Button';

function Search(props) {
  const { onSubmit } = props;
  const [name, setName] = useState('');
  const [email, setAddress] = useState('');
  return (
    <Form onSubmit={onSubmit}>
      <TextField name="name" value={name} onChange={e => setName(e.target.value) }/>
      <TextField name="email" value={email} onChange={e => setAddress(e.target.value) }/>

      <ButtonFields lg>
        <Button primary type="submit" md>
          Enviar
        </Button>
      </ButtonFields>
    </Form>
  );
}

export default Search;
