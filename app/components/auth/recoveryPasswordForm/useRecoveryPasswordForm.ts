import React, { useState } from 'react';
import Swal from 'sweetalert2';

import Cookie from 'js-cookie';
import {  HandleLogout } from '@/actions/auth';
import IChangePassForm from '@/utils/types/auth/changePassFormInterface';
import IChangePassErrorForm from '@/utils/types/auth/changePassFormErrorInterface';
import changePassValidation from '@/utils/formValidation/changePassValidatio';
import recoveryPassword from '@/utils/api/auth/recoveryPassword';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../../context';


const useRecoveryPasswordForm = (token: string) => {
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfPasswordVisibility = () => {
    setShowConfPassword(!showConfPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChangePassForm({ ...changePassForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) 
      Swal.fire({
        icon: 'error',
        title: 'Token Inválido',
        // text: data.error,
       });
    
    const errors = changePassValidation(changePassForm);
    setChangePassFormError(errors);
    
    if (errors.password || errors.confPassword) return;

    try {
      const data = await recoveryPassword(token, changePassForm.password)
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
    } catch (error: any) {
         Swal.fire({
         icon: 'error',
         title: 'Error mModificando la contraseña',
         text: error,
       });
    }
  };

  return { changePassForm, changePassFormError, handleChange, handleSubmit, showPassword, togglePasswordVisibility, showConfPassword, toggleConfPasswordVisibility }
}
export default useRecoveryPasswordForm