import IResponseCoworking from '@/utils/types/coworkingsResponse'
import Image from 'next/image'
import Link from 'next/link'
import TimeIcon from '../../icons/TimeIcon'
import PositionIcon from '../../icons/Position'

const Coworking = ({ coworking }: { coworking: IResponseCoworking }) => {

  const url = process.env.NEXT_PUBLIC_FRONT_URL
  return (
    <article className='relative flex flex-col justify-between shadow-lg w-[300px] bg-[#f4faf7] text-sm'>
      <Link className='relative group overflow-hidden rounded-t' href={`${url}/coworkings/${coworking.id}`}>
        <Image width={300} height={250} className='block h-auto m-auto rounded-t shadow-md group-hover:scale-110 transition duration-500 object-cover' src={coworking.thumbnail || ''} alt={coworking.name || ''} />
        <div className="absolute bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      </Link>
      <main className='px-4'>
        <Link href={`${url}/coworkings/${coworking.id}`}>
          <h3 className="font-semibold text-base my-4">{coworking.name}</h3>
        </Link>
        <hr className='pt-4' />
        <div className='flex items-center gap-4'>
          <TimeIcon className="w-6 text-gray-600" />
          <p className=''>Horario</p>
        </div>
        <span className='my-2 ml-10 leading-6'>
          {coworking.open?.slice(0, 5)} am - {coworking.close?.slice(0, 5)} pm
        </span>
        <hr className='pt-4' />
        <div className='flex items-center gap-4'>
          <PositionIcon className="w-6 text-gray-600" />
          <p className=''>Ubicación</p>
        </div>
        <div className='my-2 ml-10 leading-6'>
          <p>{coworking.country} - {coworking.state}</p>
          <p>{coworking.city}</p>
          <p>{coworking.address}</p>
        </div>
      </main>
      <footer>
        <Link href={`${url}/coworkings/${coworking.id}`}>
          <p className='text-sm text-right p-4'>Ver detalle</p>
        </Link>
      </footer>
    </article>
  )
}
export default Coworking