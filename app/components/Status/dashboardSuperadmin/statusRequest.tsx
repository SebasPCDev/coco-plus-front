import { StatusRequest } from '@/utils/types/requests/statusRequest';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function RequestStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-[12px]',
        {
          'bg-gray-100 text-gray-500': status === StatusRequest.PENDING,
          'bg-orange-500 text-white': status === StatusRequest.CLOSED,
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pendiente
          <ClockIcon className="ml-1 w-4 text-gray-500" />
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
