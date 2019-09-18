import React from 'react';

import css from './Content.module.scss';

function Content(props) {
  const { children } = props;
  return (
    <div className={css.content}>{children}</div>
  );
}

export default Content;
