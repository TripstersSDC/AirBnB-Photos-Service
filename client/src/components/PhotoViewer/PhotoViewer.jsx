import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  IoMdHeartEmpty, IoIosArrowBack, IoIosArrowForward,
} from 'react-icons/io';
import { IoShareOutline, IoClose } from 'react-icons/io5';

import classes from './PhotoViewer.module.css';

import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';

function PhotoViewer(props) {
  const {
    modalOpen, setModalOpen, selectedPhoto, setSelectedPhoto, photos,
  } = props;
  const [photoFade, setPhotoFade] = useState('');

  useEffect(() => {
    const updateClass = modalOpen ? classes.fadeIn : '';
    setPhotoFade(updateClass);
  }, [modalOpen]);

  useEffect(() => {
    setPhotoFade(classes.toggleFade);
    setTimeout(() => { setPhotoFade(classes.visible); }, 450);
  }, [selectedPhoto]);

  const prevPhoto = () => {
    const newSelected = photos.find((photo) => photo.id === selectedPhoto.id - 1);
    setSelectedPhoto(newSelected);
  };

  const nextPhoto = () => {
    const newSelected = photos.find((photo) => photo.id === selectedPhoto.id + 1);
    setSelectedPhoto(newSelected);
  };

  return (
    <div className={`${classes.viewer}`}>
      {/* TOP ROW */}
      <div className={`${classes.top} ${classes.row}`}>
        <div>
          <Button
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            type="closebtn"
          >
            <IoClose className={classes.icon} />
            Close
          </Button>
        </div>
        <div>
          <p className={classes.text}>{`${selectedPhoto.id} / ${photos.length}`}</p>
        </div>
        <div className={classes.row}>
          <IconButton border={false} large={false}>
            <IoShareOutline className={classes.icon} />
          </IconButton>
          <IconButton border={false} large={false}>
            <IoMdHeartEmpty className={classes.icon} />
          </IconButton>
        </div>
      </div>
      {/* MIDDLE ROW */}
      <div className={`${classes.middle} ${classes.row}`}>
        <div className={classes.centerhorizontal}>
          <IconButton
            className="previous"
            border
            large
            handleClick={prevPhoto}
            isHidden={selectedPhoto.id === 1}
          >
            <IoIosArrowBack className={classes.icon} />
          </IconButton>
        </div>
        <div className={classes.centerhorizontal}>
          <img
            src={selectedPhoto.imageUrl}
            alt={selectedPhoto.description}
            className={`${classes.photo} ${photoFade}`}
          />
        </div>
        <div className={classes.centerhorizontal}>
          <IconButton
            className="next"
            border
            large
            handleClick={nextPhoto}
            isHidden={selectedPhoto.id === photos.length}
          >
            <IoIosArrowForward className={classes.icon} />
          </IconButton>
        </div>
      </div>
      {/* BOTTOM ROW */}
      <div className={`${classes.bottom}`}>
        <div>
          <p className={classes.text}>{selectedPhoto.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoViewer;

PhotoViewer.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.shape({
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    room: PropTypes.string,
  }).isRequired,
  setSelectedPhoto: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
