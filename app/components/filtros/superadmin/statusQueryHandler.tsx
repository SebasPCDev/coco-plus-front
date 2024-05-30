'use client';
import statusHandler from '@/utils/queryFilterHandler/statusHandler';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
export default function StatusHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('status', event.target.value);
    if (params.get('status') === 'null') params.delete('status');
    replace(`${pathname}?${params.toString()}`);
  };

  const typeEntity = pathname.split('/').pop() || '';

  return (
    <div className="my-4 flex flex-col gap-8 px-[1.5rem] text-sm sm:flex-row">
      <p className="flex items-center font-bold">Filtrar por:</p>
      <div className="relative rounded-full border-2 border-gray-300">
        <select
          name="status"
          placeholder="Seleccionar"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10  outline-2 placeholder:text-gray-500"
          onChange={handleChange}
          defaultValue={searchParams.get('status')?.toString()}
        >
          <option value="null" className="text-gray-400">
            Estado
          </option>
          {statusHandler[typeEntity].map((status) => (
            <option key={status.name} value={status.name}>
              {status.value}
            </option>
          ))}
        </select>
        <CheckCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}
