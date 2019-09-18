import React from 'react';
import classNames from 'classnames';

import css from './Button.module.scss';

function Button(props) {
  const { danger, success, primary, children, lg, md, sm, ...otherProps } = props;
  const classes = classNames({
    [css.button]: true,
    [css['button--danger']]: danger,
    [css['button--success']]: success,
    [css['button--primary']]: primary,
    [css['button--lg']]: lg,
    [css['button--md']]: md,
    [css['button--sm']]: sm,
  });

  return (
    <button className={classes} {...otherProps}>{children}</button>
  );
}

export default Button;
