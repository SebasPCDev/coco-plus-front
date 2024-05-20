import React, { useState } from 'react';
import { useUserContext } from '../../context';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';

import { HandleChangePass, HandleLogout } from '@/actions/auth';
import IChangePassForm from '@/utils/types/auth/changePassFormInterface';
import IChangePassErrorForm from '@/utils/types/auth/changePassFormErrorInterface';
import changePassValidation from '@/utils/formValidation/changePassValidatio';


const useChangePassForm = () => {
  const router = useRouter();
  const { setUser, setToken } = useUserContext();
  const [changePassForm, setChangePassForm] = useState<IChangePassForm>({
    password: '',
    confPassword: ''
  });

  const [changePassFormError, setChangePassFormError] = useState<IChangePassErrorForm>({
    password: '',
    confPassword: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChangePassForm({ ...changePassForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = changePassValidation(changePassForm);
    setChangePassFormError(errors);
    if (errors.password || errors.confPassword) return;

    const data = await HandleChangePass(changePassForm);


    if (!data.error) {
      setUser(data.user);
      setToken(data.token);
      await Swal.fire({
        icon: 'success',
        title: 'Contraseña modificada',
        showConfirmButton: false,
        width: '450px',
        timer: 2000,
      });

      HandleLogout();
      setToken(undefined);
      setUser(undefined);
      Cookie.remove('token');
      Cookie.remove('user');
      router.push('/');

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error modificando la contraseña',
      });
    }
  };

  return { changePassForm, changePassFormError, handleChange, handleSubmit }
}
export default useChangePassForm