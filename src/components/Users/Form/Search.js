import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Form from '../../UI/Form/Form';
import TextField from '../../UI/Form/TextField';
import ButtonFields from '../../UI/Form/ButtonFields';
import Button from '../../UI/Button/Button';

function Search(props) {
  const { onSubmit } = props;
  const [name, setName] = useState('');
  const [email, setAddress] = useState('');
  return (
    <Grid fluid style={{ padding: 0 }}>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col lg={6} md={12} xs={12} sm={12}>
            <TextField
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              label="Nome"
            />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            <TextField
              name="email"
              value={email}
              onChange={e => setAddress(e.target.value)}
              label="Email"
            />
          </Col>
        </Row>
        <ButtonFields lg>
          <Button primary type="submit" md>
            Enviar
          </Button>
        </ButtonFields>
      </Form>
    </Grid>
  );
}

export default Search;
