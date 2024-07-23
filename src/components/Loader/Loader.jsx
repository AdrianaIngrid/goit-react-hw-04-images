
import { Vortex } from "react-loader-spinner";
import styles from './Loader.module.css';
function Loader () {
  return (
    <div className={styles.loader}>
      <Vortex
        visible={false}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
        
  
}

export default Loader;
