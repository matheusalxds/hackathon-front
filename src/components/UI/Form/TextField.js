import React from 'react';
import classNames from 'classnames';

import css from './TextField.module.scss';

function TextField(props) {
  const { name, type = 'text', value, label, onChange } = props;
  const classes = classNames({
    [css.textField]: true,
    [css['textField--active']]: value,
  });
  return (
    <div className={classes}>
      <input type={type} name={name} value={value} onChange={onChange} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default TextField;
