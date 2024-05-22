'use client';

import { UserCircleIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function HeadquartersCoworkings({
  headquarters,
}: {
  headquarters: any;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('headquarter', e.target.value);
    if (params.get('headquarter') === 'null') params.delete('headquarter');
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mb-5 flex flex-row gap-5 text-sm">
      <p className="flex items-center font-bold">Filtrar por sede:</p>
      <div className="relative w-1/6 rounded-full border-2 border-gray-300">
        <select
          name="type"
          className="peer block w-full cursor-pointer rounded-md  border-gray-200 py-2 pl-10  outline-2 placeholder:text-gray-500"
          placeholder="Seleccionar"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="null" className="text-gray-400 opacity-40">
            Seleccionar
          </option>
          {headquarters.map((coworking: any) => (
            <option key={coworking.id} value={coworking.id}>
              {coworking.name}
            </option>
          ))}
        </select>
        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}
