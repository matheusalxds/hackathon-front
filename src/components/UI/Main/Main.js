import React from 'react';

import css from './Main.module.scss';

function Main(props) {
  const { children } = props;
  return (
    <main className={css.main}>
      {children}
    </main>
  );
}

export default Main;
