'use client';

import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/components/context';
import Cookie from 'js-cookie';
import { HandleLogout } from '@/actions/auth';
import Swal from 'sweetalert2';

export default function Logout() {
  const router = useRouter();
  const { setToken, setUser } = useUserContext();

  const handleClick = (event: any) => {
    try {
      event.preventDefault();
      Swal.fire({
        title: '¿Quieres cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        confirmButtonColor: '#222B2D',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Sesión cerrada',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
          setTimeout(() => {
            HandleLogout();
            setToken(undefined);
            setUser(undefined);
            Cookie.remove('token');
            Cookie.remove('user');
            router.push('/');
          }, 1500);
        }
      });
    } catch (error) {
      return Swal.fire(
        '¡Error!',
        'Ha ocurrido un error al cerrar sesión',
        'error',
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium transition ease-in hover:bg-orange-300 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Cerrar Sesión</div>
    </button>
  );
}
