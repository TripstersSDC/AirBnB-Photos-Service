import React from 'react';
import PropTypes from 'prop-types';

import classes from './PhotoItem.module.css';

function PhotoItem(props) {
  const { photo, setSelectedPhoto, setModalOpen } = props;
  const {
    id, thumbnailUrl, description,
  } = photo;
  const assignedClasses = () => (`${classes.photo}
          ${id === 1 ? classes.photoitemleft : ''}
          ${id === 4 ? classes.photoitemtopright : ''}
          ${id === 5 ? classes.photoitembottomright : ''}`);

  const handleClick = () => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  return (
    <button type="button" onClick={handleClick} className={classes.photobtn}>
      <img
        src={thumbnailUrl}
        alt={description}
        photo-id={id}
        className={assignedClasses()}
      />
    </button>
  );
}

export default PhotoItem;

PhotoItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.string,
  }).isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
