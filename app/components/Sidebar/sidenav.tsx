"use client"
import Link from 'next/link';
import NavLinks from './navlinks/nav-links';
import Logout from '../logout';
import CocoLogo from '../Logo/coco-logo';
import styles from "./sidenav.module.css"
import { useState } from 'react';

export default function SideNav() {

  const [activeNav, setActiveNav] = useState(styles.noActive);
  
  const [close, setClose] = useState(styles.close);
  const [closeBur, setCloseBur] = useState("");
  const [closeBurA, setCloseBurA] = useState("");

  const handleOnResponsiveVar = ()=>{
    if(activeNav == styles.noActive) setActiveNav(styles.active)
      else setActiveNav(styles.noActive)

    if(close == styles.close && closeBur == "" && closeBurA == "") {
      setClose(""); 
      setCloseBur(styles.activebur);
      setCloseBurA(styles.activebura);
  } else {    
      setClose(styles.close);
      setCloseBur("");
      setCloseBurA("")
  } 
  }

  const handleOnLinked=()=>{
    setActiveNav(styles.noActive)

    setClose(styles.close);
    setCloseBur("");
    setCloseBurA("")
  }

  return (
    <div className="">
      <div className={`bg-custom-fourth shadow-md ${styles.buttonAndLogoResponsive}`}>
        <Link onClick={handleOnLinked} href="/" className="LogoResponsive">
          <div className="">
          <CocoLogo />
          </div>
        </Link>
        <div className="toggleResponsive">
          <button className={styles.opensidebar} style={{marginLeft: "1rem", fontSize: "20px"}}>
                <label className={styles.hamburger}>
                    <input type="checkbox" onClick={handleOnResponsiveVar}/>
                    <svg viewBox="0 0 32 32" className={closeBur}>
                        <path className={`${styles.line} ${styles.linetopbottom} ${closeBurA}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className={styles.line} d="M7 16 27 16"></path>
                    </svg>
                </label>
          </button>
        </div>
      </div>

      <div className={`${styles.linksContainerResponsive} ${activeNav} flex flex-col items-center justify-center px-3 py-4 md:fixed md:h-full md:w-56 md:px-2`}>
        <Link
          className="mb-2 hidden w-full rounded-md bg-custom-fourth p-4 md:flex md:h-28 md:items-center md:justify-center"
          href="/"
        >
          <CocoLogo />
        </Link>
        <div onClick={handleOnLinked} className={`${styles.linksResponsiveContainer} flex w-2/3 flex-col space-x-1  md:w-full md:grow md:flex-col md:space-x-0 md:space-y-2`}>
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <form>
            <Logout />
          </form>
        </div>
      </div>
    </div>
  );
}
