import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

function Button(props) {
  const {
    children, type, modalOpen, setModalOpen,
  } = props;

  const handleClick = () => {
    const toggleValue = !modalOpen;
    setModalOpen(toggleValue);
  };

  return (
    <button type="button" className={`${classes.btn} ${classes[type]}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
