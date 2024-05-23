"use client";
import { useState } from "react";
import putDataCoworking from "./putDataCoworking";
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';

export const EditCoworkSuperAdmin = ({ id }) => {
  const token = Cookie.get('token');

  const [newData, setNewData] = useState({
    name: "",
    phone: "",
    email: "",
    open: "",
    address: "",
    country: "",
    state: "",
    city: "",
    status: ""
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: name === "capacity" ? Number(value) : value
    }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    
    const modifiedData = {};
    for (const key in newData) {
      if (newData[key] !== "" && newData[key] !== 0) {
        modifiedData[key] = newData[key];
      }
    }

    Swal.fire({
      title: '¿Estás seguro de querer actualizar este coworking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Actualizar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedData = await putDataCoworking(token, modifiedData, id);
          console.log("Datos actualizados:", updatedData);
          Swal.fire(
            'Datos actualizados exitosamente',
            '',
            'success'
          );
        } catch (error) {
          console.error("Error al actualizar los datos del coworking:", error);
          Swal.fire(
            'Error al actualizar los datos del coworking',
            '',
            'error'
          );
        }
      }
    });
  };

  return (
    <div>
      <form>
        <div className="mt-10 space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-[20px] font-semibold text-gray-900">
              Editar información del coworking
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Nombre:</label>
                <div className="mt-2">
                  <input
                    name="name"
                    type="text"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Teléfono:</label>
                <div className="mt-2">
                  <input
                    name="phone"
                    type="number"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="label-form">Email:</label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Hora de Apertura:</label>
                <div className="mt-2">
                  <input
                    type="time"
                    name="open"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Hora de Cierre:</label>
                <div className="mt-2">
                  <input
                    type="time"
                    name="close"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">País:</label>
                <div className="mt-2">
                  <input
                    name="country"
                    type="text"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Estado / Provincia:</label>
                <div className="mt-2">
                  <input
                    name="state"
                    type="text"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Ciudad:</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Capacidad:</label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="capacity"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="label-form">Dirección:</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    className="sm:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-secondary sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            onClick={handleClick}
            className="rounded-md bg-custom-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-senary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-secondary"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCoworkSuperAdmin;
