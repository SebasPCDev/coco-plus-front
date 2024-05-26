import { CompanyStatus } from '@/utils/types/companies/companyStatus.enum';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

import clsx from 'clsx';

export default function CompanyStatusFunction({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex  items-center rounded-full px-2 py-1 text-[12px]',
        {
          'bg-gray-100 text-gray-500': status === CompanyStatus.PENDING,
          'bg-green-500 text-white': status === CompanyStatus.ACTIVE,
          'bg-red-500 text-white': status === CompanyStatus.INACTIVE,
          'bg-orange-500 text-white': status === CompanyStatus.ACEPTED,
          'bg-purple-500 text-white': status === CompanyStatus.COMPLETED,
        },
      )}
    >
      {status === CompanyStatus.PENDING ? (
        <>
          Pendiente
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === CompanyStatus.ACTIVE ? (
        <>
          Activo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === CompanyStatus.INACTIVE ? (
        <>
          Inactivo
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === CompanyStatus.ACEPTED ? (
        <>
          Aceptado
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === CompanyStatus.COMPLETED ? (
        <>
          Completado
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
