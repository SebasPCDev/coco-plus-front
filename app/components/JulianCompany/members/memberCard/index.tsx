'use client';

import React, { useState } from 'react';
import { useUserContext } from '@/app/components/context';
import Modal from '@/app/components/JulianCompany/modal';
import Swal from 'sweetalert2';
import putPassesEmployee from '@/utils/api/company/putPassesEmployee';
import { useRouter } from 'next/navigation';
import PutStatusEmployee from '@/utils/puts/putBlockedEmployee';

interface MemberCardProps {
  userId: string;
  companyId: string;
  photoUrl: string;
  name: string;
  email: string;
  role: string;
  identification: string;
  passes: number;
  passesAvailable: number | null;
  status: 'active' | 'blocked';
}

const MemberCard: React.FC<MemberCardProps> = ({
  userId,
  companyId,
  photoUrl,
  name,
  email,
  role,
  identification,
  passes,
  passesAvailable,
  status,
}) => {
  const [newPasses, setNewPasses] = useState(0);
  const { token, user } = useUserContext();

  const handleStatusClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(status);
    Swal.fire({
      title:
        status === 'active'
          ? `¿Estás seguro de querer bloquear a ${name}?`
          : `¿Estás seguro de querer activar a ${name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: status === 'active' ? 'Bloquear' : 'Activar',
    }).then(async (result) => {
      if (result.isConfirmed && token) {
        try {
          const response = await PutStatusEmployee({
            companyId,
            userId,
            token,
            status,
          });
          await Swal.fire(
            `Se ha bloqueado a ${name} correctamente`,
            '',
            'success',
          );
          window.location.reload();
        } catch (error: any) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error,
          });
          console.error('Error blocking employee:', error);
        }
      }
    });
  };

  const handleActivateClick = async () => {
    if (
      window.confirm('¿Estás seguro de que quieres activar a este miembro?')
    ) {
      /* setIsBlocked("active"); */
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewPasses(Number(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      title: `¿Estás seguro de querer cambiar el número de pases de ${name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Cambiar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await putPassesEmployee(
            companyId,
            userId,
            newPasses,
          );
          await Swal.fire(
            `Se ha cambiado el número de pases de ${name} a ${newPasses} correctamente`,
            '',
            'success',
          );
          setIsModalOpen(false);
          window.location.reload();
        } catch (error) {
          Swal.fire('Error', error, 'error');
        }
      }
    });
  };

  return (
    <div
      className={
        status === 'blocked'
          ? 'flex flex-col justify-between rounded-lg bg-red-50 p-4 shadow-md'
          : 'flex flex-col justify-between rounded-lg bg-white p-4 shadow-md'
      }
    >
      <div className="flex">
        <div className="flex items-start space-x-4 break-all">
          <img
            src={photoUrl}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="flex flex-wrap items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  role === 'Admin'
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {role}
              </span>
            </div>
            <p className="text-gray-600">{identification}</p>
            <p className="text-gray-600">{email}</p>
            <div className="my-2 border-b border-gray-200"></div>
            <div className="text-gray-600">
              <p>Total pases: {passes}</p>
              <p>
                Límite de pases disponibles:{' '}
                {passesAvailable !== null ? passesAvailable : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center">
        <Modal isOpen={isModalOpen} onClose={onModalClick}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Cantidad de pases</label>
            <input
              className="rounded-full bg-gray-300"
              type="number"
              onChange={handleChange}
              name={name}
            />
            <button className="btn btn-confirm" type="submit">
              Confirmar
            </button>
          </form>
        </Modal>
        {role === 'employee' && (
          <button
            onClick={onModalClick}
            className="text-md my-4 mr-4 rounded-full bg-custom-primary px-4 py-1 font-semibold text-custom-secondary hover:bg-custom-secondary hover:text-custom-primary"
          >
            Pases
          </button>
        )}

        {role === 'employee' && (
          <button
            className="text-md my-4 mr-4 rounded-full bg-gray-300 px-4 py-1 font-semibold text-custom-secondary hover:bg-red-500 hover:text-white"
            onClick={handleStatusClick}
          >
            {status === 'active' ? 'Bloquear' : 'Activar'}
          </button>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
