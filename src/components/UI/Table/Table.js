import React from 'react';

import css from './Table.module.scss';

function Table(props) {
  const { children } = props;
  return (
    <table className={css.table}>
      {children}
    </table>
  );
}

export default Table;
