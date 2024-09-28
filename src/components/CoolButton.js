// src/components/CoolButton.js

import React from 'react';
import classNames from 'classnames';

function CoolButton({ children, isPrimary, isSuccess, isDanger, isLight, isRounded, isSmall }) {
  const classes = classNames('button', {
    'is-primary': isPrimary,
    'is-success': isSuccess,
    'is-danger': isDanger,
    'is-light': isLight,
    'is-rounded': isRounded,
    'is-small': isSmall,
  });

  return <button className={classes}>{children}</button>;
}

export default CoolButton;
