"use client";
import { useState } from "react";
import putDataCoworking from "./putDataCoworking";
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export const EditCoworkSuperAdmin = ({ id }) => {
  const token = Cookie.get('token');
  const router = useRouter();

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
    setNewData((prevData: any) => ({
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

  const handleCancel = () => {
    router.push("/dashboard/superadmin/coworkings");
  }

  return (
    <div>
      <form className="p-10 mx-auto">
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
                    className="input-form"
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
                    className="react-international-phone-input "
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
                    className="input-form"
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
                    className="input-form"
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
                    className="input-form"
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
                    className="input-form"
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
                    className="input-form"
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
                    className="input-form"
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
                    className="input-form"
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
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">

          <button
          className="btn btn-cancel"
          onClick={handleCancel}
          >
            Cancelar
          </button>

          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-confirm"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCoworkSuperAdmin;
