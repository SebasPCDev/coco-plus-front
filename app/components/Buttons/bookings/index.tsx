'use client';

import PutConfirmBooking from '@/utils/puts/putConfirmBooking';
import { RiCheckLine } from '@remixicon/react';
import Swal from 'sweetalert2';

export function ConfirmBooking({
  idCoworking,
  token,
  idBooking,
  fetchData,
}: {
  idCoworking: string;
  token?: string;
  idBooking?: string;
  fetchData: () => Promise<void>;
}) {
  const handleClick = () => {
    Swal.fire({
      title: '¿Estás seguro de querer aceptar la reserva?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      reverseButtons: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          try {
            if (token) {
              const Response = PutConfirmBooking({
                idCoworking,
                idBooking,
                token,
              });

              Swal.fire(
                `Se ha confirmado la reserva correctamente`,
                '',
                'success',
              );
            }
          } catch (error) {}
        }
      })
      .then(() => fetchData());
  };
  return (
    <button
      onClick={handleClick}
      className=" flex items-center  rounded-md border bg-custom-primary p-2 hover:bg-green-500"
    >
      <span>Confirmar</span>
      <RiCheckLine className="h-8 w-8 text-green-600" />
    </button>
  );
}
