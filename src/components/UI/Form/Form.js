import React from 'react';

import css from './Form.module.scss';

function Form(props) {
  const { children, onSubmit } = props;
  return (
    <form className={css.form} onSubmit={onSubmit}>{children}</form>
  );
}

export default Form;
