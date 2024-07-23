import React from 'react';
import styles from './ImageGaleryItem.module.css';
import PropTypes from 'prop-types';


function ImageGalleryItem({ image, handleModal }) {
  
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => handleModal(image.largeImageURL)}
    >
     
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}
ImageGalleryItem.propTypes ={
  image: PropTypes.object,
  handleModal: PropTypes.func,
};

export default ImageGalleryItem;
