import React from 'react';
import classNames from 'classnames';
import css from './Heading.module.scss';

function Heading(props) {
  const { one, two, children } = props;

  const classes = classNames({
    [css.heading]: true,
    [css['heading--1']]: one,
    [css['heading--2']]: two,

  });
  if (one) {
    return (
      <h1 className={classes}>{children}</h1>
    );
  }

  if (two) {
    return (
      <h2 className={classes}>{children}</h2>
    );
  }
}

export default Heading;
