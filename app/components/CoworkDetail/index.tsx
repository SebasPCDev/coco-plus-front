'use client';
import { useEffect, useState } from 'react';
import styles from './CoworkDetail.module.css';
import getCowork from '../coworkings/[id]/getCowork';
import { Coworking } from '@/utils/types/editCoworking/editInfo/editCoworkingInterfaces';

import MapCoworking from "../coworkings2/mapCoworkings";
import MapSingleItem from "./MapSingleItem";
import Cookie from "js-cookie"
import Link from "next/link";


const slides = [
  {
    url: 'https://www.thedigitalnomad.asia/wp-content/uploads/2022/02/Coworking-spaces.jpeg',
    title: 'Imagen cowork 1',
  },
  {
    url: 'https://coworkingmag.com/wp-content/uploads/sites/76/2019/07/district-28-e1563430078466.jpg',
    title: 'boat',
  },
  {
    url: 'https://dr3h7ptpe31k5.cloudfront.net/Assets/images/2333/Creative-Serviced-Office-Taipei-Zhongzheng-District-119-Chongqing-South-Road-583741.jpg',
    title: 'Imagen cowork 2',
  },
  {
    url: 'https://officehub.s3-ap-southeast-2.amazonaws.com/Assets/images/2333/Creative-Serviced-Office-Taipei-Zhongzheng-District-119-Chongqing-South-Road-728863.jpg',
    title: 'Imagen cowork 3',
  },
  {
    url: 'https://assets-global.website-files.com/605baba32d94435376625d33/650cb9a6f4a5283dccb4288d_ho_chi_minh_city_cowork-sharespace_vietnam.jpg',
    title: 'Imagen cowork 4',
  },
];


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
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
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
                  className={`${styles.h2} ${styles.sectiontitle}`}
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
