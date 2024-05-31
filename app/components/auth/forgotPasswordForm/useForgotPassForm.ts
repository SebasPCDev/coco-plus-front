import forgotPassword from '@/utils/api/auth/forgotPassword';
import { useState } from 'react';
import Swal from 'sweetalert2';

const useForgotPassForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setEmailError('El email es requerido');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('El email es inválido');
      return;
    }

    try {
      setLoading(true);
      await forgotPassword(email);
      setLoading(false);
      /* recovery-password */
      await Swal.fire({
        icon: 'success',
        title: 'Te enviamos un email',
        text: 'Sigue las intrucciones del email para cambiar la contraseña',
        showConfirmButton: false, //ARREGLADO
        width: '450px',
      });
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error,
      });
    }
  };

  return { email, emailError, loading, handleChange, handleSubmit };
};

export default useForgotPassForm;
