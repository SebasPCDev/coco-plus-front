"use client"
import putCheckInByEmail from '@/utils/api/users/putCheckInByEmail';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../../shared/Spinner';

const CheckInbyEmail = ({ searchParams }: { searchParams: { token: string } }) => {
  const token = searchParams.token;
  const [checkIn, setCheckIn] = useState(false);

  useEffect(() => {
    const checkIn = async () => {
      try {
        const response = await putCheckInByEmail(token)
        setCheckIn(true)
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error,
        })
      }
    }
    checkIn()
  }, [token])


  return (
    <div className="relative h-screen w-full bg-[url('../../public/LoginMobile.png')] bg-cover bg-center ">
      <div className="flex justify-center items-center h-full w-full">
        <div
          className="flex justify-center items-center flex-col gap-4 rounded-2xl bg-custom-white shadow-lg max-w-[600px] w-full"
        >
          {!checkIn ? (
            <>
              <h1 className="m-6 text-center text-2xl font-bold text-gray-800">
                Iniciando proceso de Check-in
              </h1>
              <p className='h-20 mx-auto w-full mb-6'><Spinner /></p>
            </>
          ) : (
            <>
              <h1 className="m-6 text-center text-2xl font-bold text-gray-800">
                Check-in realizado con éxito
              </h1>
              <p className='text-center mb-6 text-xl'>Muchas gracias!</p>

              <Link href="/">
                <button className="btn btn-confirm mb-6">
                  Ir al inicio
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default CheckInbyEmail
