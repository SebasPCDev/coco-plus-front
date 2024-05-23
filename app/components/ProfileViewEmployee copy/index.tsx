'use client';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { Card } from '@/app/ui/dashboard/cards';
import { getDataUserEmployee } from './getDataUserEmployee';
import putDataUserEmployee from './putDataUserEmployee';
import Swal from 'sweetalert2';
import { EnvelopeIcon, PencilIcon, TvIcon } from '@heroicons/react/24/outline';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import StatusHandler from '../filtros/superadmin/statusQueryHandler';
import UserStatus from '../Status/dashboardSuperadmin/statusUser';

export const ProfileViewEmployee = () => {
  // CONTENIDO DE INFO PERSONAL
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  console.log(userData);

  // ACTUALIZACION DE CONTENIDO DE FORMULARIO
  const [name, setName] = useState<any>('');
  const [lastname, setLastname] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [position, setPosition] = useState<any>('');
  const [identification, setIdentification] = useState<any>('');
  const [errors, setErrors] = useState<any>(null);
  const [success, setSuccess] = useState<any>(false);
  const [editShow, setEditShow] = useState<boolean>(false);

  // extra---
  const lastCowork: any = 20;

  // SETEO Y ENVIO DE INFORMACION DE DE CONTENIDO (logica de put de datos personales)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token: any = Cookie.get('token');
    const user: any = JSON.parse(Cookie.get('user') as string);

    const id: any = user.id;

    if (!token) {
      setErrors('No se encontró el token');
      return;
    }
    const newData: any = {
      name,
      lastname,
      email,
      phone,
      position,
      identification,
    };

    try {
      for (const propiedad in newData) {
        if (newData[propiedad].trim() === '') {
          delete newData[propiedad];
        }
      }
      if (Object.keys(newData).length === 0) {
        Swal.fire({
          title: 'Debes ingresar al menos un campo para actualizar tus datos',
          icon: 'warning',
        });
        return;
      }
      const dataUpdate: any = await putDataUserEmployee(token, newData, id);
      if (dataUpdate) {
        Swal.fire({
          title: '¿Seguro que quieres actualizar tus datos?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#222B2D',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, actualizar!',
        }).then((result: any) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Datos actualizados!',
              icon: 'success',
            });
            setSuccess(true);
            setErrors(null);
            setEditShow(false);

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        });
      }
    } catch (errors: any) {
      setErrors(errors.message || 'Error desconocido');
      setSuccess(false);
    }
  };

  const handleEdit = () => {
    setEditShow(true);
  };

  //ACTUALIZACION DE CONTENIDO
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token: any = Cookie.get('token');
        if (token) {
          const data: any = await getDataUserEmployee(token);
          setUserData(data);
        } else {
          setError('No se encontró el token');
        }
      } catch (error: any) {
        setError(error.message || 'Error desconocido');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return (
      <div className="flex w-full flex-col">
        <section className="relative justify-between pb-5 pt-40">
          <div className="absolute left-0 top-0 z-0 h-60 w-full rounded-lg bg-gray-300"></div>
          <div className="mx-auto w-full max-w-7xl md:px-8">
            <div className="relative z-10 mb-5 flex items-center justify-center sm:justify-start">
              <div className="h-40 w-40 rounded-full border-4 border-solid border-white bg-gray-300"></div>
            </div>
            <div className="mb-5 flex flex-col items-center justify-center max-sm:gap-5 sm:flex-row sm:justify-between">
              <div className="block">
                <div className="flex items-center gap-4 py-5 max-sm:flex-wrap max-sm:justify-center">
                  <a
                    href="javascript:;"
                    className="h-10 w-40 rounded-full bg-gray-300 px-6 py-3 font-semibold leading-6  text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
                  >
                    {' '}
                  </a>
                  <a
                    href="javascript:;"
                    className="h-10 w-40 rounded-full bg-gray-300 px-6 py-3 font-semibold leading-6  text-gray-700 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
                  >
                    {' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <main className="flex w-full flex-col">
      <section className="relative mt-5 pb-5">
        <div>
          <div className="flex w-full flex-col">
            <div className="mb-10 flex flex-col items-center gap-4 max-sm:gap-5 sm:justify-start lg:flex-row ">
              {/* Imagen */}
              <div className="flex flex-col">
                <div className="mb-5 h-40 w-40 rounded-full border-4 border-solid border-white bg-gray-300"></div>
                <div className="mb-3 text-center">
                  <UserStatus status={userData.status} />
                </div>
                <div
                  onClick={handleEdit}
                  className="btn flex cursor-pointer justify-center gap-2 border hover:bg-custom-tertiary"
                >
                  <PencilIcon className="h-5 w-5" />

                  <button>Editar</button>
                </div>
              </div>
              {/* Datos */}
              <div className="block  px-5 py-3">
                <h3 className="mb-4 text-4xl font-bold text-gray-900 max-sm:text-center">
                  {`${userData.name} ${userData.lastname}`}
                </h3>
                <div className="mb-5 flex flex-col items-center justify-center gap-10 max-sm:gap-5 sm:flex-row sm:justify-start">
                  <div className="block">
                    <h2 className=" mb-3 text-lg text-gray-900">
                      <b>Datos personales</b>
                    </h2>
                    <p className="font-normal leading-7 text-gray-800 max-sm:text-center">
                      <div className="mb-3 text-start">
                        <b>Identificación </b> <p>{userData.identification}</p>
                      </div>
                      <div className="mb-3 text-start">
                        <b>Cargo </b> <p>{userData.position}</p>
                      </div>
                      <div className="mb-3 text-start">
                        <b>Rol </b> <p>{userData.role}</p>
                      </div>
                    </p>
                  </div>
                  <div className="block">
                    <h2 className=" mb-3 text-lg text-gray-900">
                      <b>Datos empresa</b>
                    </h2>
                    <p className="font-normal leading-7 text-gray-800 max-sm:text-center">
                      <div className="mb-3 text-start">
                        <b>Nombre </b> <p>{userData.employee.company.name}</p>
                      </div>
                      <div className="mb-3 text-start">
                        <b>Email </b> <p>{userData.employee.company.email}</p>
                      </div>
                      <div className="mb-3 text-start">
                        <b>Teléfono </b>{' '}
                        <p>{userData.employee.company.phone}</p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              {/* Información */}
              <div className="ml-5 w-[25rem] lg:w-[60rem]">
                <div className="rounded-2xl bg-custom-primary p-5">
                  <h2 className=" text-lg font-semibold leading-7 text-gray-900">
                    Información
                  </h2>
                  <p className="mt-5 leading-6 text-gray-600">
                    Tus pases totales asignados, tus pases disponibles, y los
                    últimos coworkings que visitaste
                  </p>

                  <div className="mt-5 flex flex-wrap justify-center gap-4 p-1">
                    <div className="min-w-[15rem]">
                      <Card
                        title="Pases Totales"
                        value={userData.employee.passes}
                        type="pending"
                      />
                    </div>
                    <div className="min-w-[15rem]">
                      <Card
                        title="Pases Disponibles"
                        value={userData.employee.passesAvailable}
                        type="invoices"
                      />
                    </div>
                    <div className="min-w-[15rem]">
                      <Card
                        title="Pases Utilizados"
                        value={lastCowork}
                        type="customers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={
          editShow
            ? 'block transition ease-in-out md:opacity-100'
            : 'hidden transition ease-in-out md:opacity-0 lg:block'
        }
      >
        <form onSubmit={handleSubmit} id={'editInfo'}>
          <div>
            <div className="border-b border-gray-900/10 pb-12 ">
              <h2 className="text-2xl font-bold text-gray-900">
                Editar información
              </h2>
              <p className="mt-1 leading-6 text-gray-600">
                Edita los campos y actualiza algunos datos de tu perfil
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <div>
                  <label className="label-form">Nombre:</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.name}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-form">Apellido:</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.lastname}
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-form">Email</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.email}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-form">Teléfono</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.phone}
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-form">Posición:</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.position}
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-form">Nº de identificación</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.identification}
                      type="text"
                      value={identification}
                      onChange={(e) => setIdentification(e.target.value)}
                      className="sm: block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div
                    className=" flex items-center justify-start"
                    onClick={() => setEditShow(false)}
                  >
                    <button className="btn btn-cancel">Cancelar</button>
                  </div>
                  <div className=" flex items-center justify-start ">
                    <button type="submit" className="btn btn-confirm">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {error && <div className="mt-4 text-red-500">{error}</div>}
          {success && (
            <div className="mt-4 text-green-500">
              Datos actualizados con éxito
            </div>
          )}
        </form>
      </div>
    </main>
  );
};
