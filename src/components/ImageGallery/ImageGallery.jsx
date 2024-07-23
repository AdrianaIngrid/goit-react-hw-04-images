import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            handleModal={this.props.handleModal}
          ></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
