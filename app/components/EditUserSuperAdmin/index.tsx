"use client";
import { useState } from "react";
import putDataUserEmployee from "../ProfileViewEmployee copy/putDataUserEmployee";
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";

export const EditUserSuperAdmin = ({ id }) => {
  const router = useRouter();
  const token = Cookie.get('token');

  const [showPassword, setShowPassword] = useState("password");

  const togglePasswordVisibility = () => {
    if(showPassword == "password"){
      setShowPassword("text")
    } else {
      setShowPassword("password");
    }
  };






  const [showPasswordConf, setShowPasswordConf] = useState("password");

  const togglePasswordVisibilityConf = () => {
    if(showPasswordConf == "password"){
      setShowPasswordConf("text")
    } else {
      setShowPasswordConf("password");
    }
  };

  const [newData, setNewData] : any = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    identification: "",
    position: "",
    role: "",
    password: "",
    confPassword: ""
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewData((prevData: any) => ({
      ...prevData,
      [name]: name === "capacity" ? Number(value) : value
    }));
  };

  const handleClick = async (event: any) => {
    event.preventDefault();
    
    const modifiedData : any = {};
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
          const updatedData = await putDataUserEmployee(token, modifiedData, id);
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
    router.push("/dashboard/superadmin/users");
  }

  return (
    <div>
      <form className="p-10 mx-auto">
        <div className="mt-10 space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-[20px] font-semibold text-gray-900">
              Editar información del Usuario
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
                <label className="label-form">Apellido:</label>
                <div className="mt-2">
                  <input
                    name="lastname"
                    type="text"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="label-form">Phone</label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Correro electionico:</label>
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
                <label className="label-form">Numero de identificación:</label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="identification"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Posicion:</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="position"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Rol:</label>
                <div className="mt-2">
                <select
                    name="role"
                    className="input-form"
                    onChange={handleInputChange}
                    value={newData.status}
                  >
                    <option value="adminCompany">Aministrador de compañia</option>
                    <option value="adminCoworking">Aministrador de coworking</option>
              </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Contraseña:</label>
                <div className="relative flex items-center justify-center gap-2 rounded-lg border-2 bg-custom-white">
                  <input
                    name="password"
                    type={showPassword}
                    className="input-form"
                    onChange={handleInputChange}
                    />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 text-gray-700 px-2 py-1 rounded"
                  >
                    {showPassword == "password"? 
                    <svg className="eye-slash" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path></svg>
                    :
                    <svg className="eye" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                    }
                  </button>
                  
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Confirmar Contraseña:</label>
                <div className="relative flex items-center justify-center gap-2 rounded-lg border-2 bg-custom-white">
                  <input
                    name="confPassword"
                    type={showPasswordConf}
                    className="input-form"
                    onChange={handleInputChange}
                    />
                  <button
                    type="button"
                    onClick={togglePasswordVisibilityConf}
                    className="absolute right-3 text-gray-700 px-2 py-1 rounded"
                  >
                    {showPasswordConf == "password"? 
                    <svg className="eye-slash" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path></svg>
                    :
                    <svg className="eye" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                    }
                  </button>
                  
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

export default EditUserSuperAdmin;
