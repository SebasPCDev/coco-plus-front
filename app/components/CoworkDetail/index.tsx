'use client';
import { useEffect, useState } from 'react';
import styles from './CoworkDetail.module.css';
import getCowork from '../coworkings/[id]/getCowork';
import { Coworking } from '@/utils/types/editCoworking/editInfo/editCoworkingInterfaces';

import MapSingleItem from "./MapSingleItem";
import Cookie from "js-cookie"
import Link from "next/link";

const slideStyles: any = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  border: '1px solid #868686',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const rightArrowStyles: any = {

  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "12px",
  fontSize: "45px",
  color: "#0d4300",
  background: "#efefef",
  boxShadow: "0px 0px 27px -7px rgba(0, 0, 0, 0.849);",
  border: "1px solid #959595",
  borderRadius: "50%",
  padding: "7px",
  zIndex: 1,
  cursor: 'pointer',
  marginRight: '-2.4rem',
};

const leftArrowStyles: any = {

  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "12px",
  fontSize: "45px",
  color: "#0d4300",
  background: "#efefef",
  boxShadow: "0px 0px 27px -7px rgba(0, 0, 0, 0.849);",
  border: "1px solid #959595",
  borderRadius: "50%",
  padding: "7px",
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

  const user = Cookie.get('user');

  const [role, setRole] = useState(null)

  useEffect(()=>{
    if(user) {
      const userObject = JSON.parse(user);
      const newRole = userObject.role;
      setRole(newRole)
    }
  }, [user])


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
    const newIndex = isFirstSlide ? cowork?.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === cowork?.images.length - 1;
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

  return (
    <>
      <main>

        <section className={`${styles.section} ${styles.prodmin}`} aria-label="prodmin">
          <div className={styles.contproducto}>

              {/* =============== swiper IMAGENES-DESLIZABLE THUMBNAIL ===============  */}
              <div className={styles.imagenesdeslizable__overflow}>
                <div className={styles.containerStyles}>
                  <div style={sliderStyles}>
                    <div>
                      <div onClick={goToPrevious} style={leftArrowStyles}>
                      <svg height="36" viewBox="0 0 24 24" fill="none" stroke="#0d4300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                      </div>
                      <div onClick={goToNext} style={rightArrowStyles}>
                      <svg height="36" viewBox="0 0 24 24" fill="none" stroke="#0d4300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    </div>
                    <div style={slideStylesWidthBackground}></div>
                  </div>
                </div>
              </div>
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
                      <p className={styles.value}>Apertura</p>
                      <p className={styles.label}>{cowork.open}</p>
                    </div>
                    <div>
                      <p className={styles.value}>Cierre</p>
                      <p className={styles.label}>{cowork.open}</p>
                    </div>
                    <div>
                      <p className={styles.value}>Capacidad</p>
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
                      <p>{cowork.phone}</p>
                      <p>{cowork.email}</p>
                    </article>
                  </div>

                  <div>
                      { role == "employee" &&   
                      <Link href="#" >
                        <button className="btn btn-confirm">
                          Reservar
                        </button>
                      </Link>
                      }
                  </div>
                </article>
              </div>
            )}
          </div>
        </section>

        <section className={styles.amenities}>
          <div className={styles.amTitle}>
            <h2>
              Comodidades:
            </h2>
          </div>
            <div className={styles.ammContainer}>
              { cowork &&
                cowork.amenities.map((amenitie)=>{
                  return(
                    <div className={`${styles.ammItem}`}>
                      <h3 className=' font-bold '>{amenitie.name}</h3>
                      <p>{amenitie.description}</p>
                    </div>
                  )
                })
              }
            </div>
        </section>

        <section className={styles.mapadireccion}>

          {cowork && 
            <div className={styles.contenedor}>
              <h2 className={styles.mapatitulo}>Ubicacion: {cowork.country}, {cowork.state}, {cowork.city}</h2>
              <div className={styles.googlemapslink}>
                <MapSingleItem item={cowork}/>
              </div>

            </div>
          }
        </section>
      </main>
    </>
  );
};

export default CoworkDetail;
