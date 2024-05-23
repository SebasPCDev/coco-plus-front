'use client';
import { useState, ChangeEvent, MouseEvent } from 'react';
import putDataCompany from './putDataCompany';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export const EditCompanySuperAdmin = ({ id }) => {
  const router = useRouter();
  const token = Cookie.get('token');

  const [newData, setNewData] = useState({
    name: '',
    phone: '',
    email: '',
    businessSector: '',
    status: 'pending', // Valor por defecto
    quantityBeneficiaries: 0,
    size: '',
    totalPasses: 0,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]:
        name === 'quantityBeneficiaries' || name === 'totalPasses'
          ? Number(value)
          : value,
    }));
  };

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Validación del email
    if (
      newData.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newData.email)
    ) {
      Swal.fire('Error', 'Ingrese un email válido.', 'error');
      return;
    }

    const modifiedData = {};
    for (const key in newData) {
      if (newData[key] !== '' && newData[key] !== 0) {
        modifiedData[key] = newData[key];
      }
    }

    Swal.fire({
      title: '¿Estás seguro de querer actualizar esta compañía?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Actualizar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedData = await putDataCompany(token, modifiedData, id);

          Swal.fire('Datos actualizados exitosamente', '', 'success');
        } catch (error) {
          console.error('Error al actualizar los datos de la compañía:', error);
          Swal.fire(
            'Error al actualizar los datos de la compañía',
            '',
            'error',
          );
        }
      }
    });
  };

  const handleCancel = () => {
    router.push('/dashboard/superadmin/companies');
  };

  return (
    <div>
      <form className="mx-auto p-10">
        <div className="mt-10 space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-[20px] font-semibold text-gray-900">
              Editar información de la compañía
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
                    className="input-form"
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
                <label className="label-form">Sector:</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="businessSector"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Cantidad de beneficiarios:</label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="quantityBeneficiaries"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label className="label-form">Tamaño:</label>
                <div className="mt-2">
                  <input
                    name="size"
                    type="text"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Pases Totales:</label>
                <div className="mt-2">
                  <input
                    name="totalPasses"
                    type="number"
                    className="input-form"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="label-form">Estado:</label>
                <div className="mt-2">
                  <select
                    name="status"
                    className="input-form"
                    onChange={handleInputChange}
                    value={newData.status}
                  >
                    <option value="pending">Pendiente</option>
                    <option value="inactive">Inactivo</option>
                    <option value="active">Activo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button className="btn btn-cancel" onClick={handleCancel}>
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

export default EditCompanySuperAdmin;
