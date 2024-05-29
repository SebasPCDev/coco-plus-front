'use client';
import { useEffect, useState } from 'react';
import styles from './CoworkDetail.module.css';
import getCowork from '../coworkings/[id]/getCowork';
import { Coworking } from '@/utils/types/editCoworking/editInfo/editCoworkingInterfaces';
import MapSingleItem from './MapSingleItem';
import Cookie from 'js-cookie';
import Link from 'next/link';

const slideStyles: any = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  border: '1px solid #868686',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const rightArrowStyles: any = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '12px',
  fontSize: '45px',
  color: '#0d4300',
  background: '#efefef',
  boxShadow: '0px 0px 27px -7px rgba(0, 0, 0, 0.402);',
  border: '1px solid #959595',
  borderRadius: '50%',
  padding: '7px',
  zIndex: 1,
  cursor: 'pointer',
  marginRight: '-2.4rem',
};

const leftArrowStyles: any = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '12px',
  fontSize: '45px',
  color: '#0d4300',
  background: '#efefef',
  boxShadow: '0px 0px 27px -7px rgba(0, 0, 0, 0.552);',
  border: '1px solid #959595',
  borderRadius: '50%',
  padding: '7px',
  zIndex: 1,
  cursor: 'pointer',
  marginLeft: '-2.4rem',
};

const sliderStyles: any = {
  position: 'relative',
  height: '100%',
  boxShadow: '0px 0px 26px -7px rgba(0, 0, 0, 0.44)',
  borderRadius: '10px',
};

const dotsContainerStyles: any = {
  display: 'flex',
  justifyContent: 'center',
};

const dotStyle: any = {
  margin: '0 3px',
  cursor: 'pointer',
  fontSize: '20px',
};

export const CoworkDetail = ({ id }: { id: string }) => {
  let icon = null;

  const user = Cookie.get('user');

  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      const userObject = JSON.parse(user);
      const newRole = userObject.role;
      setRole(newRole);
    }
  }, [user]);

  const [cowork, setCowork] = useState<Coworking | null>(null);

  useEffect(() => {
    console.log(user);

    const fetchCowork = async () => {
      try {
        const item = await getCowork(id);
        if (!item) window.location.href = '/404';
        setCowork(item);
      } catch (error) {
        console.error('Error fetching cowork:', error);
        setCowork(null);
      }
    };

    fetchCowork();
  }, [id]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? cowork?.images.length! - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === cowork?.images.length! - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${cowork?.images[currentIndex].secure_url})`,
  };

  const formattedOpen = (open: any) => {
    const formattedOpendData = open.substring(0, 5);
    return formattedOpendData;
  };

  const formattedClose = (close: any) => {
    const formattedClosedData = close.substring(0, 5);
    return formattedClosedData;
  };

  // const formattedOpen = cowork.open ? cowork.open.substring(0, 5) : '';
  // const formattedClose = cowork.close ? cowork.close.substring(0, 5) : '';

  return (
    <>
      <main>
        <section
          className={`${styles.section} ${styles.prodmin}`}
          aria-label="prodmin"
        >
          <div className={styles.contproducto}>
            {cowork && (
              <div className={styles.imagenesdeslizable__overflow}>
                <div className={styles.containerStyles}>
                  <div style={sliderStyles}>
                    <div>
                      <div onClick={goToPrevious} style={leftArrowStyles}>
                        <svg
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0d4300"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </div>
                      <div onClick={goToNext} style={rightArrowStyles}>
                        <svg
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0d4300"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </div>
                    </div>
                    <div style={slideStylesWidthBackground}></div>
                  </div>
                </div>
              </div>
            )}
            {cowork && (
              <div className={styles.prodmincontent}>
                <h2
                  style={{ marginBottom: '1rem' }}
                  className={`font-semibold ${styles.h2} ${styles.sectiontitle}`}
                >
                  {cowork.name}
                </h2>

                <article className={styles.jobcard}>
                  <div>
                    <p className={styles.texttitle}>{cowork.address}</p>
                  </div>

                  <div className={styles.budgetexp}>
                    <div>
                      <p className={` font-bold ${styles.value}`}>Apertura</p>
                      <p className={styles.label}>
                        {formattedOpen(cowork.open)}
                      </p>
                    </div>
                    <div>
                      <p className={` font-bold ${styles.value}`}>Cierre</p>
                      <p className={styles.label}>
                        {formattedClose(cowork.close)}
                      </p>
                    </div>
                    <div>
                      <p className={` font-bold ${styles.value}`}>Capacidad</p>
                      <p className={styles.label}>{cowork.capacity}</p>
                    </div>
                  </div>

                  <p className={styles.textbody}>
                    <div>
                      <b>
                        {cowork.country}, {cowork.state}, {cowork.city}
                      </b>
                    </div>
                  </p>

                  <div className={styles.tags}>
                    <article>
                      <p>
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#074400"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>{' '}
                        {cowork.phone}
                      </p>
                      <p>
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#074400"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>{' '}
                        {cowork.email}
                      </p>
                    </article>
                  </div>

                  <div>
                    {role == 'employee' && (
                      <Link href="#">
                        <button className="btn btn-confirm">Reservar</button>
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            )}
          </div>
        </section>

        {cowork && (
          <section className={styles.amenities}>
            <div className="">
              <div className={styles.amTitle}>
                <h2>Comodidades:</h2>
              </div>
              <div className={styles.ammContainer}>
                {cowork &&
                  cowork.amenities.map((amenitie) => {
                    return (
                      <div key={cowork.id} className={`${styles.ammItem}`}>
                        <h3 className=" font-bold ">{amenitie.name}</h3>
                        {amenitie.name}
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        )}

        <section className={styles.mapadireccion}>
          {cowork && (
            <div className={styles.contenedor}>
              <h2 className={styles.mapatitulo}>
                Ubicacion: {cowork.country}, {cowork.state}, {cowork.city}
              </h2>
              <div className={styles.googlemapslink}>
                <MapSingleItem item={cowork} />
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default CoworkDetail;
