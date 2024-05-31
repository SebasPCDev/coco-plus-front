import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner}>
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
  </div>
);

export default Spinner;