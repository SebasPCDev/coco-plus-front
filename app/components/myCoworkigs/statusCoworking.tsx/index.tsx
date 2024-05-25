import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CoworkingStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-[12px]',
        {
          'bg-custom-secondary text-white': status === 'pending',
          'bg-green-500 text-white': status === 'active',
          'bg-red-600 text-white': status === 'inactive',
          'bg-orange-500 text-white': status === 'close',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pendiente
          <ClockIcon className="ml-1 w-4 text-white " />
        </>
      ) : null}
      {status === 'active' ? (
        <>
          Activo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'inactive' ? (
        <>
          Inactivo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'close' ? (
        <>
          Cerrado
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
