import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CgLayoutGridSmall } from 'react-icons/cg';

import classes from './PhotoGrid.module.css';

import PhotoItem from '../PhotoItem/PhotoItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PhotoViewer from '../PhotoViewer/PhotoViewer';

function PhotoGrid() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const photosLoaded = photos.length > 0;

  const getPhotos = () => {
    const propertyId = new URLSearchParams(window.location.search).get('propertyId') || '30506101';

    axios.get(`/api/home/${propertyId}/photos`)
      .then((response) => {
        setPhotos(response.data[0].photos);
        setSelectedPhoto(response.data[0].photos[0]);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const cacheImages = (photosArray) => (
    Promise.all(photosArray.map((src) => (
      new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src.imageUrl;
        img.onload = resolve();
        img.onerror = reject();
      })
    )))
  );

  useEffect(() => {
    cacheImages(photos);
  }, [photos]);

  return (
    <div className={classes.photogrid}>

      {photosLoaded
        ? (
          <div className={classes.left}>
            {photosLoaded
              ? (
                <PhotoItem
                  photo={photos[0]}
                  setSelectedPhoto={setSelectedPhoto}
                  setModalOpen={setModalOpen}
                  name="photo-1"
                />
              )
              : null}
          </div>
        )
        : null}
      {photosLoaded
        ? (
          <div className={classes.right}>
            <div className={classes.upperright}>
              <PhotoItem
                photo={photos[1]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
                name="photo-2"
              />
              <PhotoItem
                photo={photos[3]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
                name="photo-4"
              />
            </div>
            <div className={classes.lowerright}>
              <PhotoItem
                photo={photos[2]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
                name="photo-3"
              />
              <PhotoItem
                photo={photos[4]}
                setSelectedPhoto={setSelectedPhoto}
                setModalOpen={setModalOpen}
                name="photo-5"
              />
            </div>
          </div>
        )
        : null}

      <div className={classes.btnContainer}>
        <Button type="allphotos" modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <CgLayoutGridSmall />
          Show All Photos
        </Button>
      </div>

      <Modal modalOpen={modalOpen}>
        <PhotoViewer
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          photos={photos}
        />
      </Modal>

    </div>
  );
}

export default PhotoGrid;
