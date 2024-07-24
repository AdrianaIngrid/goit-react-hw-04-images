import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
function ImageGallery ({ images, handleModal }) {

    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            handleModal={handleModal}
          ></ImageGalleryItem>
        ))}
      </ul>
    );
  }

export default ImageGallery;
