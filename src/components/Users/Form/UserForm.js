import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Form from '../../UI/Form/Form';
import TextField from '../../UI/Form/TextField';
import ButtonFields from '../../UI/Form/ButtonFields';
import Button from '../../UI/Button/Button';


function UserForm(props) {
  const { onSubmit, data } = props;
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


  useEffect(() => {
    function setInitialState() {

      if (data) {
        const { name, email, role } = data;

        if (name) setName(name);
        if (email) setEmail(email);
        if (role) setRole(role);
      }
    }

    setInitialState();

  }, [data]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid fluid style={{ padding: 0 }}>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              name="name"
              label="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              name="email"
              label="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <TextField
              required
              name="role"
              label="Função"
              value={role}
              onChange={e => setRole(e.target.value)}
            />
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <ButtonFields lg>
              <Button lg>Cancelar</Button>
              <Button primary lg>Enviar</Button>
            </ButtonFields>
          </Col>
        </Row>
      </Grid>

    </Form>
  );
}

export default UserForm;
