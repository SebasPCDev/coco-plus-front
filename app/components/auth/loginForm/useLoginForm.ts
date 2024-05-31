import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

import { useUserContext } from '@/app/components/context';
import { HandleLogin } from '@/actions/auth';
import ILoginForm from '@/utils/types/auth/loginFormInterface';
import ILoginErrorForm from '@/utils/types/auth/loginFormErrorInterface';
import loginValidation from '@/utils/formValidation/loginValidation';
import redirectionByRole from '@/utils/ redirects/redirectByRole';

const useLoginForm = () => {
  const router = useRouter();
  const { setUser, setToken } = useUserContext();
  const [LoginForm, setLoginForm] = useState<ILoginForm>({
    email: '',
    password: '',
  });

  const [LoginFormError, setLoginFormError] = useState<ILoginErrorForm>({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...LoginForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = loginValidation(LoginForm);
    setLoginFormError(errors);
    if (errors.email || errors.password) return;

    const data = await HandleLogin(LoginForm);

    //const data = await PostLogin(LoginForm);
    if (!data.error) {
      setUser(data.user);
      setToken(data.token);
      await Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false, //ARREGLADO
        width: '450px',
        timer: 2000,
      });
      if (data.user) {
        const redirection = redirectionByRole(data.user.role);
        router.push(redirection);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos',
        confirmButtonColor: '#222B2D',
      });
    }
  };

  return { LoginForm, LoginFormError, handleChange, handleSubmit };
};
export default useLoginForm;
