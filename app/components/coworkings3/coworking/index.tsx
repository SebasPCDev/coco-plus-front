import IResponseCoworking from '@/utils/types/coworkingsResponse';
import Image from 'next/image';
import Link from 'next/link';
import TimeIcon from '../../icons/TimeIcon';
import PositionIcon from '../../icons/Position';
import styles from "./coworking.module.css"

const Coworking = ({ coworking }: { coworking: IResponseCoworking }) => {
  return (
    <article className={styles.coworkContainer}>
      <Link
        className="group relative overflow-hidden rounded-t"
        href={`coworkings/${coworking.id}`}
      >
        <Image
          width={300}
          height={250}
          className={styles.coworkImage}
          src={coworking.thumbnail || ''}
          alt={coworking.name || ''}
        />
        <button className={styles.eyeMore}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
      </Link>
      <main className="p-[1rem]">
        <Link href={`/coworkings/${coworking.id}`}>
          <h3 className=" font-semibold pb-[10px] ">{coworking.name}</h3>
          <div className={styles.gradientSep}></div>
        </Link>
        <div className="flex items-center gap-1 mt-[1px]">
          <svg className={styles.boxesIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
          <p className={styles.hourText}>Horario:</p>
        </div>
        <span className={styles.hourInfData}>
          · {coworking.open?.slice(0, 5)} am - {coworking.close?.slice(0, 5)} pm
        </span>

        <div className="flex items-center gap-1 mt-[1px]">

          <svg className={styles.boxesIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
          <p className={styles.hourText}>Capacidad:</p>
        </div>
        <span className={styles.hourInfData}>
          · {coworking.capacity} boxes
        </span>

        <div className="flex items-center gap-1 mt-[1px]">
          <svg className={styles.boxesIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
          <p className={styles.hourText}>Ubicación</p>
        </div>
        <div className="my-2 ml-10 leading-6">
          <p className={styles.locationInfData}>
            {coworking.country} - {coworking.state}
          </p>
          <p className={styles.subInfDataText}>{coworking.city}</p>
          <p className={styles.subInfDataText}>{coworking.address}</p>
        </div>

      </main>
    </article>
  );
};
export default Coworking;
