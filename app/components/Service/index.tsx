import Image from 'next/image';
import styles from './Service.module.css';

export const Service: React.FC<{ id: string }> = (props) => {
  return (
    <section
      id={props.id}
      className="section service flex justify-center"
      aria-label="service"
    >
      <div className={styles.container}>
        <h2 className={`${styles.h2} ${styles.sectiontitle} `}>
          Como reservar
        </h2>

        <ul className={styles.servicelist}>
          <li>
            <div className={styles.servicecard}>
              <div className={styles.cardicon}>
                <Image
                  src={'/cocoproject/research.png'}
                  alt="1"
                  width={50}
                  height={50}
                />
              </div>

              <h3 className={`${styles.h3} ${styles.cardtitle} text-[20px]`}>
                Encuentra tu espacio ideal
              </h3>

              <p className={styles.cardtext}>
                Ingresa a la aplicación y busca el espacio que más se ajuste a
                tus necesidades
              </p>
            </div>
          </li>

          <li>
            <div className={styles.servicecard}>
              <div className={styles.cardicon}>
                <Image
                  src={'/cocoproject/booking.png'}
                  alt="1"
                  width={50}
                  height={50}
                />
              </div>

              <h3 className={`${styles.h3} ${styles.cardtitle} text-[20px]`}>
                Haz una reserva
              </h3>

              <p className={styles.cardtext}>
                Selecciona el espacio y día que deseas reservar.
              </p>
            </div>
          </li>

          <li>
            <div className={styles.servicecard}>
              <div className={styles.cardicon}>
                <Image
                  src={'/cocoproject/conversation.png'}
                  alt="1"
                  width={50}
                  height={50}
                />
              </div>

              <h3 className={`${styles.h3} ${styles.cardtitle} text-[20px]`}>
                Coordina el encuentro
              </h3>

              <p className={styles.cardtext}>
                Comparte el código de reserva en el lugar y disfruta de tu
                espacio.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
