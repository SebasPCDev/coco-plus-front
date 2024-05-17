"use client"
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import { Card } from "@/app/ui/dashboard/cards";
import { getDataUserEmployee } from './getDataUserEmployee';
import putDataUserEmployee from './putDataUserEmployee';

export const ProfileViewEmployee = () => {
  // CONTENIDO DE INFO PERSONAL
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  // ACTUALIZACION DE CONTENIDO DE FORMULARIO
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [identification, setIdentification] = useState('');
  const [errors, setErrors] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // extra---
  const lastCowork = 20; 

  // SETEO Y ENVIO DE INFORMACION DE DE CONTENIDO (logica de put de datos personales)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token = Cookie.get('token');
    const user = JSON.parse(Cookie.get('user'))
    const id = user.id

    if (!token) {
      setErrors("No se encontró el token");
      return;
    }

    const newData = {
      name,
      lastname,
      email,
      phone,
      position,
      identification
    };

    try {
      await putDataUserEmployee(token, newData, id);
      setSuccess(true);
      setErrors(null);

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (errors: any) {
      setErrors(errors.message || "Error desconocido");
      setSuccess(false);
    }
  };


  //ACTUALIZACION DE CONTENIDO 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookie.get('token');
        if (token) {
          const data = await getDataUserEmployee(token);
          setUserData(data);
        } else {
          setError("No se encontró el token");
        }
      } catch (error: any) {
        setError(error.message || "Error desconocido");
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return (
      <div className="flex flex-col w-full">
      <section className="relative pt-40 pb-5 justify-between">   
      <div className=" bg-gray-300 w-full absolute top-0 left-0 z-0 h-60 rounded-lg"></div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
          <div className="bg-gray-300 h-40 w-40 border-4 border-solid border-white rounded-full"></div>
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
          <div className="block">
            <h3 className="h-10 w-30 font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center rounded-full py-3 px-6 bg-gray-300">
                               
            </h3>
            <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4 py-5">
              <a href="javascript:;" className="rounded-full w-40 h-10 py-3 px-6 bg-gray-300 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">               </a>
              <a href="javascript:;" className="rounded-full w-40 h-10 py-3 px-6 bg-gray-300 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">                     </a>
            </div>
          </div>
        </div>
      </div>
      </section>
      </div>
    );
  } 

  
  return (
      <main className="flex flex-col w-full">                             
        <section className="relative pt-40 pb-5 justify-between">   
        <img src="https://img.freepik.com/fotos-premium/diseno-fondo-abstracto-hd-color-verde-maximo_851755-27257.jpg" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60 rounded-lg"/>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="user-avatar-image"
                 className=" w-40 border-4 border-solid border-white rounded-full"/>
          </div>
          <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
                {`${userData.name} ${userData.lastname}`}
              </h3>
      
              <h2 className="text-base font-semibold leading-7 text-gray-900"><b>Datos personales</b></h2>
              <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4 py-5">
                <a href="javascript:;" className="rounded-full py-3 px-6 bg-green-200 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">*Telefono: {userData.phone}</a>
                <a href="javascript:;" className="rounded-full py-3 px-6 bg-green-200 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">*Email: {userData.email}</a>
              </div>
              <p className="font-normal text-base leading-7 text-gray-800 max-sm:text-center">
                <b>Nº de identificacion: </b> {userData.identification} 
                <br className="hidden sm:block"/>
                <b>Posicion: </b> {userData.position}
                <br className="hidden sm:block"/>
                <b>Rol: </b> {userData.role}
                <br className="hidden sm:block"/>
              </p>
            </div>
          </div>


          <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div className="block">
              <h2 className="text-base font-semibold leading-7 text-gray-900"><b>Datos de empresa</b></h2>
              <p className="font-normal text-base leading-7 text-gray-800 max-sm:text-center">
                <b>Nombre de la empresa: </b> {userData.employee.company.name} 
                <br className="hidden sm:block"/>
                <b>Email: </b> {userData.employee.company.email}
                <br className="hidden sm:block"/>
                <b>Rol: </b> {userData.employee.company.phone}
                <br className="hidden sm:block"/>
                <b>Cantidad de Beneficiarios: </b> {userData.employee.company.quantityBeneficiaries}
                <br className="hidden sm:block"/>
              </p>
            </div>
          </div>
        </div>
        </section>

        {/*##################################################################################################################*/}


        <section className="relative pt-10 pb-24">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Info</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Tus pases totales asignados, tus pases disponibles, y los últimos coworkings que visitaste</p>

        <div className="flex flex-row gap-2 p-1">
          <Card title="Pases Totales" value={userData.employee.passes} type="pending" />
          <Card title="Pases disponibles" value={userData.employee.passesAvailable} type="invoices" />
          <Card title="Últimos Coworkings" value={lastCowork} type="customers" />
        </div>
        </section>


        {/*##################################################################################################################*/}

        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Editar información</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Edita los campos y actualiza algunos datos de tu perfil</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2 sm:col-start-1">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Nombre:</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.name}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Apellido:</label>
                  <div className="mt-2">
                    <input
                    placeholder={userData.lastname}
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.email}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <br />
                  <label className="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.phone}
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Posición:</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.position}
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">Nº de identificación</label>
                  <div className="mt-2">
                    <input
                      placeholder={userData.identification}
                      type="text"
                      value={identification}
                      onChange={(e) => setIdentification(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 mb-10">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">Save</button>
          </div>

          {error && <div className="text-red-500 mt-4">{error}</div>}
          {success && <div className="text-green-500 mt-4">Datos actualizados con éxito</div>}
        </form>
      </main>
  ); 
};

   