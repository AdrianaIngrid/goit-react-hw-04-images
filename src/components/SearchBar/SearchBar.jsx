import styles from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit (evt) {
     evt.preventDefault();
     if (searchTerm.trim() === '') {
       return alert(`Please fill in the input!`);
     }
     onSubmit(searchTerm);
     setSearchTerm('');
   };

 
 
 
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <input
            className={styles.SearchFormInput}
            name="searchTerm"
            type="text"
            autoComplete="off"
            autoFocus=""
            placeholder="Search images and photos"
            value={searchTerm}
            onChange={evt =>
              setSearchTerm(evt.target.value )
            }
          />
          <button type="submit" className={styles.SearchFormButton}>
            <FaSearch />

            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default SearchBar;
