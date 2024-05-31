import Image from 'next/image';
import Link from 'next/link';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.sectionHeroCont} aria-label="hero">
      <div className="absolute z-0 h-full w-full"></div>
      <div className={styles.TextAndButtonInfo}>
        <Image
          className={styles.logoBanner}
          src="/cocoproject/logo-slogan.png"
          alt="logo"
          width={150}
          height={150}
          style={{ filter: 'invert(100%) brightness(200%)' }}
        />
        <br />
        <h1 className={styles.hTitleSlogan}>
          Conecting Coworkings, Conecting Companies And more
        </h1>
        <br />
        <p className={styles.pTextSlogan}>
          Conectamos empresas con espacios de coworking, impulsando un modelo
          laboral híbrido y mejorando el bienestar de tus colaboradores.{' '}
          <b>Innovación, creatividad e impacto positivo</b>.
        </p>
        <br />
        <div className={styles.gradientBottomCont}></div>
      </div>
    </section>
  );
};

export default Banner;
