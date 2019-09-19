import React from 'react';
import classNames from 'classnames';

import css from './ButtonFields.module.scss';

function ButtonFields(props) {
  const { children, lg, md, sm } = props;
  const classes = classNames({
    [css.btnFields]: true,
    [css['btnFields--lg']]: lg,
    [css['btnFields--md']]: md,
    [css['btnFields--sm']]: sm,
  });
  return (
    <div className={classes}>{children}</div>
  );
}

export default ButtonFields;
