'use client';
import styles from './navbarDashboard.module.css';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useUserContext } from '../context';
import tradRoles from '@/utils/types/users/usersRoles';
import { UserSession } from '@/app/lib/definitions';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavbarDashboard({ user }: { user: UserSession }) {
  return (
    <Disclosure
      as="nav"
      className={`${styles.responsiveNone} flex h-[7rem] items-center bg-custom-fourth md:rounded-lg`}
    >
      {({ open }) => (
        <>
          <div className="flex w-full justify-end px-2 sm:px-6 lg:px-10">
            <div className="relative flex h-16 items-center justify-between gap-3">
              <h2 className="font-bold text-custom-white">
                {user &&
                  user.name +
                    ' ' +
                    user.lastname +
                    ' - ' +
                    tradRoles(user.role)}
              </h2>

              <div className="flex ">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800  focus:outline-none ">
                      <Image
                        width={48}
                        height={64}
                        className="rounded-full border-2 border-white transition duration-300 ease-in-out hover:scale-110"
                        src="/cocoproject/user.svg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-custom-primary' : '',
                              'block px-4 py-2  text-custom-fourth',
                            )}
                          >
                            Perfil
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-custom-primary' : '',
                              'block px-4 py-2  text-custom-fourth',
                            )}
                          >
                            Cerrar Sesión
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2  font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
