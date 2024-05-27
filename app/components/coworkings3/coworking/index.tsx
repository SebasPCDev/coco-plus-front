import IResponseCoworking from '@/utils/types/coworkingsResponse';
import Image from 'next/image';
import Link from 'next/link';
import TimeIcon from '../../icons/TimeIcon';
import PositionIcon from '../../icons/Position';

const Coworking = ({ coworking }: { coworking: IResponseCoworking }) => {
  return (
    <article className="relative flex w-[300px] flex-col justify-between bg-[#f4faf7] text-sm shadow-lg">
      <Link
        className="group relative overflow-hidden rounded-t"
        href={`/coworkings/${coworking.id}`}
      >
        <Image
          width={300}
          height={250}
          className="m-auto block h-auto rounded-t object-cover shadow-md transition duration-500 group-hover:scale-110"
          src={coworking.thumbnail || ''}
          alt={coworking.name || ''}
        />
        <div className="absolute h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      </Link>
      <main className="px-4">
        <Link href={`/coworkings/${coworking.id}`}>
          <h3 className="my-4 text-base font-semibold">{coworking.name}</h3>
        </Link>
        <hr className="pt-4" />
        <div className="flex items-center gap-4">
          <TimeIcon className="w-6 text-gray-600" />
          <p className="">Horario</p>
        </div>
        <span className="my-2 ml-10 leading-6">
          {coworking.open?.slice(0, 5)} am - {coworking.close?.slice(0, 5)} pm
        </span>
        <hr className="pt-4" />
        <div className="flex items-center gap-4">
          <PositionIcon className="w-6 text-gray-600" />
          <p className="">Ubicación</p>
        </div>
        <div className="my-2 ml-10 leading-6">
          <p>
            {coworking.country} - {coworking.state}
          </p>
          <p>{coworking.city}</p>
          <p>{coworking.address}</p>
        </div>
      </main>
      <footer>
        <Link href={`/coworkings/${coworking.id}`}>
          <p className="p-4 text-right text-sm">Ver detalle</p>
        </Link>
      </footer>
    </article>
  );
};
export default Coworking;
