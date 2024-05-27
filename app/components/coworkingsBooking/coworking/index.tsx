import IResponseCoworking from '@/utils/types/coworkingsResponse';
import Image from 'next/image';
import Link from 'next/link';
import TimeIcon from '../../icons/TimeIcon';
import PositionIcon from '../../icons/Position';
import { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Coworking = ({ coworking }: { coworking: IResponseCoworking }) => {
  const url = process.env.NEXT_PUBLIC_FRONT_URL;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [currentCoworking, setCurrentCoworking] = useState({
    checked: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('id', e.target.value);
    if (params.get('id') === 'null') params.delete('id');
    replace(`${pathname}?${params.toString()}`);
    setCurrentCoworking({ checked: e.target.value });
  };

  /*   useEffect(() => {
    replace(`${pathname}`);
  }, []); */

  return (
    <article
      key={coworking.id}
      className={
        'relative flex h-44 w-[750px] flex-row justify-start rounded-xl bg-[#f4faf7] px-5 py-2 text-sm shadow-lg'
      }
    >
      <div className="w-full">
        <div className="flex justify-between">
          <Link href={`${url}/coworkings/${coworking.id}`}>
            <h3 className="mb-2 text-base font-semibold">{coworking.name}</h3>
          </Link>

          <div>
            <span className="flex ">
              <label className="inline-flex cursor-pointer items-center">
                <p className="pr-3 font-bold">Seleccionar</p>
                <input
                  name="coworking"
                  type="radio"
                  value={coworking.id || ''}
                  onChange={handleChange}
                  checked={currentCoworking.checked === coworking.id}
                  className="h-4 w-4 cursor-pointer"
                />
              </label>
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <Link
            className="group relative overflow-hidden rounded-b-lg rounded-t"
            href={`${url}/coworkings/${coworking.id}`}
          >
            <Image
              width={200}
              height={150}
              className="m-auto hidden h-auto rounded-xl object-cover shadow-md transition duration-500 group-hover:scale-110 sm:block"
              src={coworking.thumbnail || ''}
              alt={coworking.name || ''}
            />
          </Link>
          <main className="px-4">
            <hr className="pt-4" />
            <div className="hidden items-center gap-4 md:flex">
              <PositionIcon className="w-6 text-gray-600" />
              <p className="">Ubicación</p>
            </div>
            <div className="my-0 md:ml-10 md:leading-6">
              <p>
                {coworking.country} - {coworking.state}
              </p>
              <p>{coworking.city}</p>
            </div>
          </main>
          <footer>
            <hr className="pt-4" />
            <div className="flex items-center gap-4">
              <TimeIcon className="w-6 text-gray-600" />
              <p className="">Horario</p>
            </div>
            <span className="my-2 ml-10 leading-6">
              {coworking.open?.slice(0, 5)} am - {coworking.close?.slice(0, 5)}{' '}
              pm
            </span>
          </footer>
        </div>
      </div>
    </article>
  );
};
export default Coworking;
