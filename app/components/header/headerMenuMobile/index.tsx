'use client'
import { useState } from 'react';
import HamburgerMenuIcon from '../../icons/HamburgerMenu'
import { UserSession } from '@/app/lib/definitions';
import Link from 'next/link';
import Logout from '../../logout';
import styles from "./headerMenuMobile.module.css"

const HeaderMenuMobile = ({ user }: { user: UserSession }) => {
  // const [showMenu, setShowMenu] = useState(false);
  const url = process.env.NEXT_PUBLIC_FRONT_URL;

  const [activeNav, setActiveNav] = useState(styles.noActive);
  const [close, setClose] = useState(styles.close);
  const [closeBur, setCloseBur] = useState('');
  const [closeBurA, setCloseBurA] = useState('');

  // const handleShowMenu = () => {
  //   setShowMenu(!showMenu)
  // }

  const handleOnResponsiveVar = () => {
    if (activeNav == styles.noActive) setActiveNav(styles.active);
    else setActiveNav(styles.noActive);

    if (close == styles.close && closeBur == '' && closeBurA == '') {
      setClose('');
      setCloseBur(styles.activebur);
      setCloseBurA(styles.activebura);
    } else {
      setClose(styles.close);
      setCloseBur('');
      setCloseBurA('');
    }
  };

  const handleOnLinked = () => {
    setActiveNav(styles.noActive);

    setClose(styles.close);
    setCloseBur('');
    setCloseBurA('');
  };
 
  return (
    <>
      <div className='relative flex lg:hidden p-2 cursor-pointer' >

      <div className="toggleResponsive">
          <button
            className={styles.opensidebar}
            style={{ marginLeft: '1rem', fontSize: '20px' }}
          >
            <label className={styles.hamburger}>
              <input type="checkbox" onClick={handleOnResponsiveVar} />
              <svg viewBox="0 0 32 32" className={closeBur}>
                <path
                  className={`${styles.line} ${styles.linetopbottom} ${closeBurA}`}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className={styles.line} d="M7 16 27 16"></path>
              </svg>
            </label>
          </button>
        </div>

        <div className={`${styles.navContainer} ${activeNav}`}>

          <div className={styles.itemsCont}>

            <Link
              href={`${url}/#services`}
              className="text-green-900 bg-gray-100 hover:text-zinc-50 hover:bg-gray-600 px-4 py-2 rounded-md text-xl font-semibold transition duration-300"
              onClick={handleOnLinked}
            >
              Como reservar
            </Link>

            <Link
              href={`${url}/#coworkings`}
              className="text-green-900 bg-gray-100 hover:text-zinc-50 hover:bg-gray-600 px-4 py-2 rounded-md text-xl font-semibold transition duration-300"
              onClick={handleOnLinked}
            >
              Nuestros espacios
            </Link>

            {user && (
              <div>
                <Link onClick={handleOnLinked} href={`/dashboard/${user?.role}`}>
                  <button className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300">
                    Dashboard
                  </button>
                </Link>
              </div>)
            }

            <div onClick={handleOnLinked} className="flex cursor-pointer items-center rounded-lg px-5 py-5 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50">
              <Logout />
            </div>

          </div>
        </div>



        
      </div>
    </>
  )
}
export default HeaderMenuMobile