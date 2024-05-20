import IResponseCoworking from '@/utils/types/coworkingsResponse'
import Image from 'next/image'
import Link from 'next/link'
import TimeIcon from '../../icons/TimeIcon'
import PositionIcon from '../../icons/Position'

const Coworking = ({ coworking }: { coworking: IResponseCoworking }) => {
  return (
    <article className='relative flex flex-col justify-between shadow-lg w-[300px]'>
      <Image width={300} height={250} className='block w-[300px] h-auto object-cover m-auto rounded shadow-md' src={coworking.thumbnail || ''} alt={coworking.name || ''} />
      <main className='px-4'>
        <Link href={`process.env.NEXT_PUBLIC_FRONT_URL/coworkings/${coworking.id}`}>
          <h3 className="font-semibold my-4">{coworking.name}</h3>
        </Link>
        <hr className='pt-4' />
        <div className='flex items-center gap-4 text-[14px]'>
          <TimeIcon className="w-6 text-gray-600" />
          <p className=''>Horario</p>
        </div>
        <span className='my-2 ml-10 leading-6'>
          {coworking.open?.slice(0, 5)} am - {coworking.close?.slice(0, 5)} pm
        </span>
        <hr className='pt-4' />
        <div className='flex items-center gap-4 text-[14px]'>
          <PositionIcon className="w-6 text-gray-600" />
          <p className=''>Ubicación</p>
        </div>
        <div className='my-2 ml-10 leading-6 text-[14px]'>
          <p>{coworking.country} - {coworking.state}</p>
          <p>{coworking.city}</p>
          <p>{coworking.address}</p>
        </div>


      </main>
    </article>
  )
}
export default Coworking