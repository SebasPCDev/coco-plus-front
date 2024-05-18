'use client';
import { RiLogoutBoxLine } from '@remixicon/react';
import { useUserContext } from '../..//context';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import { HandleLogout } from '@/actions/auth';
import Swal from 'sweetalert2';

const Logout = () => {
  const router = useRouter();
  const { setToken, setUser } = useUserContext();
  const handleClick = (event: any) => {
    event.preventDefault();
    try {
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
    <div onClick={handleClick}>
      <RiLogoutBoxLine color="white" />
    </div>
  );
};

export default Logout;
