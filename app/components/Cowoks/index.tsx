import CoworksRoute from '../coworkings/CoworksRoute';
import styles from './Coworks.module.css';

export const Coworks: React.FC<{ id: string }> = (props) => {
  return (
    <section
      id={props.id}
      // className={`${styles.section} ${styles.property}`}
      className="max-w-[1024px] mx-auto w-full mt-40 p-12 xl:p-0"
      aria-label="property"
    >
      {/* <div className={styles.container}> */}
      <div>
        <h2 className={`${styles.h2} ${styles.sectiontitle}`}>
          Nuestras oficinas
        </h2>
        <CoworksRoute />
      </div>
    </section >
  );
};

export default Coworks;
