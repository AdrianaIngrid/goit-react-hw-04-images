import styles from './SearchBar.module.css'
import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm:'' };
  }
 
 
  handleSubmit = evt => {
    
    evt.preventDefault();
    if (this.state.searchTerm.trim() === "") {
      return alert(`Please fill in the input!`);
    }
      this.props.onSubmit(this.state.searchTerm);
      this.setState({ searchTerm: '' });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchFormInput}
            name="searchTerm"
            type="text"
            autoComplete="off"
            autoFocus=""
            placeholder="Search images and photos"
            value={this.state.searchTerm}
            onChange={evt =>
              this.setState({
                ...this.state,
                searchTerm: evt.target.value,
              })
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
}
export default SearchBar;
