import React from 'react';
import classNames from 'classnames';

import css from './TextField.module.scss';

function TextField(props) {
  const {
    name,
    type = 'text',
    value,
    label,
    onChange,
    labelWhite,
    inputWhite,
    ...otherProps
  } = props;
  const classes = classNames({
    [css.textField]: true,
    [css['textField--active']]: value,
    [css['textField__label--white']]: labelWhite,
    [css['textField__input--white']]: inputWhite,
  });

  console.log('inputWhite', inputWhite);

  console.log('classes', classes);
  return (
    <div className={classes}>
      <input type={type} name={name} value={value} onChange={onChange} {...otherProps} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default TextField;
