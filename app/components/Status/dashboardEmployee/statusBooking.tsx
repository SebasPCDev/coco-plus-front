import { BookingStatus } from '@/utils/types/bookings/bookingStatus.enum';
import { CompanyStatus } from '@/utils/types/companies/companyStatus.enum';
import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/outline';

import clsx from 'clsx';

export default function BookingStatusFunction({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex  items-center rounded-full px-2 py-1 text-[12px]',
        {
          'bg-gray-100 text-gray-500': status === BookingStatus.PENDING,
          'bg-green-500 text-white': status === BookingStatus.ACTIVE,
          'bg-red-500 text-white': status === BookingStatus.USER_CANCELED,
          'bg-orange-500 text-white':
            status === BookingStatus.COWORKING_CANCELED,
          'bg-purple-500 text-white': status === BookingStatus.NO_SHOW,
          'bg-custom-secondary text-white': status === BookingStatus.COMPLETED,
        },
      )}
    >
      {status === BookingStatus.PENDING ? (
        <>
          Pendiente
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === BookingStatus.ACTIVE ? (
        <>
          Activo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === BookingStatus.USER_CANCELED ? (
        <>
          Cancelado Usuario
          <XCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === BookingStatus.COWORKING_CANCELED ? (
        <>
          Coworking Cancelado
          <XCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === BookingStatus.NO_SHOW ? (
        <>
          No se presentó
          <XCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === BookingStatus.COMPLETED ? (
        <>
          Completado
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
