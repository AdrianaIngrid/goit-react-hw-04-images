import Button from './Button/Button';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import { useState, useEffect } from 'react';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '44045744-87391f93bf3caee56476bbdd7';
const INITIAL_PER_PAGE = 12;

function App () {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

    const fetchData = async (query, perPage) => {
      if (!query) return;
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=${perPage}`
        );
        setImages(response.data.hits);
        setError(null);
        } catch (error) {
        console.error(error.message);
        setError('Error  searching images');
       } finally {
        setLoading(false);
         }
    }
      
         
  useEffect(() => {
      fetchData(query, perPage); 
  }, [query, perPage]);
  function handleSearchSubmit(searchTerm) {
    setQuery(searchTerm);
    setImages([]);
    setPerPage(INITIAL_PER_PAGE);
  }
  
  async  function loadMoreImages(event) {
    event.preventDefault();
    try {
      setLoading(true);
          const nextPage = Math.ceil(images.length / perPage) + 1;
      const response = await axios.get(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${nextPage}`
      );
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
      setLoading(false);
         } catch (error) {
      console.error('Error loading more images:', error);
      console.error(error.message);
      setLoading(false);
      setError('Error loading more images');
      }
  };
  function handleModal(imageUrl) {
    setShowModal(true);
    setSelectedImage(imageUrl);
   };

  function handleModalClose() {
    setShowModal(false);
    setSelectedImage(null);
  };

       return (
      <div>
        <SearchBar onSubmit={handleSearchSubmit} />
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ImageGallery
            images={images}
            handleModal={handleModal}
          ></ImageGallery>
        )}
        {!error && !loading && images.length > 0 && (
          <Button
            type={'button'}
            text={'Load More'}
            onClick={loadMoreImages}
          ></Button>
        )}

        {showModal && (
          <Modal imageUrl={selectedImage} onClose={handleModalClose} />
        )}
      </div>
    );
  }

export default App;
