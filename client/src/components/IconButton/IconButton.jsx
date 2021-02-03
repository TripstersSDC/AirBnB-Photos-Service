import React from 'react';
import PropTypes from 'prop-types';

import classes from './IconButton.module.css';

function IconButton(props) {
  const {
    children, border, large, handleClick, isHidden,
  } = props;
  const assignedClasses = `${classes.btn}
    ${border ? classes.borderBtn : null}
    ${large ? classes.large : classes.small}
    ${isHidden ? classes.hidden : null}`;

  return (
    <button type="button" className={assignedClasses} onClick={handleClick}>
      {children}
    </button>
  );
}

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.bool.isRequired,
  large: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  isHidden: PropTypes.bool,
};

IconButton.defaultProps = {
  handleClick: () => {},
  isHidden: false,
};
