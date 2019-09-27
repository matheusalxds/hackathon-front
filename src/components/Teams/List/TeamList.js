import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../../UI/Table/Table';
import Button from '../../UI/Button/Button';
import Content from '../../UI/Content/Content';

function TeamList(props) {
  const data = [
    { _id: 'abc1', name: 'Matheus Alexandre', email: 'mathe.system@gmail.com', role: 'Dev', team: 'Team Fuuu' },
    { _id: 'abc2', name: 'Matheus Alexandre', email: 'mathe.system@gmail.com', role: 'Dev', team: 'Team Fuuu' },
    { _id: 'abc3', name: 'Matheus Alexandre', email: 'mathe.system@gmail.com', role: 'Dev', team: 'Team Fuuu' },
    { _id: 'abc4', name: 'Matheus Alexandre', email: 'mathe.system@gmail.com', role: 'Dev', team: 'Team Fuuu' },
    { _id: 'abc5', name: 'Matheus Alexandre', email: 'mathe.system@gmail.com', role: 'Dev', team: 'Team Fuuu' },
  ];

  return data && data.length ? (
    <Table>
      <thead>
        <tr>
          <th width="15%">Nome</th>
          <th width="30%">E-mail</th>
          <th>Função</th>
          <th>Time</th>
          <th width="10%">Ação</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td>{item.team}</td>
            <td>
              <Link to={`/usuarios/${item._id}`}>
                <Button sm primary>Editar</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : <Content>Nenhum usuário foi encontrado.</Content>;
}

export default TeamList;
