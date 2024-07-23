import styles from './Button.module.css';
import PropTypes from 'prop-types';
function Button({type, text, onClick }) {
  
    return (
      <div className= {styles.buttonCenter}>
        <button type={type} className={styles.Button} onClick={onClick}>
          {text}
        </button>
      </div>
    );
}
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button;