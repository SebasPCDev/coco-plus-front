'use client'
import { useState } from 'react';
import HamburgerMenuIcon from '../../icons/HamburgerMenu'
import { UserSession } from '@/app/lib/definitions';
import Link from 'next/link';
import Logout from '../../logout';

const HeaderMenuMobile = ({ user }: { user: UserSession }) => {
  const [showMenu, setShowMenu] = useState(false);
  const url = process.env.NEXT_PUBLIC_FRONT_URL;

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div onClick={handleShowMenu} className='relative flex lg:hidden p-2 cursor-pointer' >

        <HamburgerMenuIcon className='h-6 w-6 text-white' />

        <div className={`fixed z-50 top-[65px] bottom-0 w-full bg-black/80 transition-all duration-500 ${showMenu ? 'left-0' : '-left-full'}`}>
          <div onClick={handleShowMenu} className="items-center flex flex-col justify-center h-full gap-12">
            {/* <div className="items-center hidden lg:flex"> */}
            <Link
              href={`${url}/#services`}
              className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300"
            >
              Como reservar
            </Link>
            <Link
              href={`${url}/#coworkings`}
              className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300"
            >
              Nuestros espacios
            </Link>
            {user && (
              <div>
                <Link href={`/dashboard/${user?.role}`}>
                  <button className="text-zinc-50 hover:text-zinc-50 hover:bg-zinc-900 px-4 py-2 rounded-md text-xl font-semibold transition duration-300">
                    Dashboard
                  </button>
                </Link>
              </div>)
            }
            <div className="flex cursor-pointer items-center rounded-lg px-5 py-5 transition duration-300 hover:bg-zinc-900 hover:text-zinc-50">
              <Logout />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
export default HeaderMenuMobile