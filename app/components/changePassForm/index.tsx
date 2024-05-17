'use client';
import React, { useState } from 'react';
import { useUserContext } from '../context';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import { HandleChangePass, HandleLogout } from '@/actions/auth';
import { ChangePassFormArray } from '@/utils/arraysforms/changePassForm';
import IChangePassForm from '@/utils/types/changePassFormInterface';
import IChangePassErrorForm from '@/utils/types/changePassFormErrorInterface';
import changePassValidation from '@/utils/formValidation/changePassValidatio';


const ChangePassForm = () => {
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

  return (
    <>
      <div className="relative h-screen bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
        <div className="relative h-full w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
          <form
            className="md:3/4 absolute left-0 top-0 mb-4 flex w-1/2 translate-x-1/2 translate-y-1/2 transform flex-col gap-4 rounded-2xl bg-custom-white px-8 pb-8 pt-6 shadow-lg sm:w-full lg:w-1/2 "
            onSubmit={handleSubmit}
          >
            <h1 className="m-6 text-center text-3xl font-bold text-gray-800">
              Cambiar contraseña
            </h1>
            {ChangePassFormArray.map(({ name, label, type, placeholder }) => {
              const formValue = changePassForm[name as keyof IChangePassForm];
              const formError = changePassFormError[name as keyof IChangePassForm];

              return (
                <React.Fragment key={name}>
                  <div className="mb-4 flex flex-col gap-4">
                    <label className="text-[16px] text-gray-700" htmlFor={name}>
                      {label}
                    </label>
                    <div className="flex items-center justify-center gap-2 rounded-lg border-2 bg-custom-white">
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        className="w-full rounded-2xl bg-custom-white px-4 py-4 text-[16px] focus:outline-none"
                        onChange={handleChange}
                        value={formValue}
                      />
                    </div>
                    <p className="mt-1 px-2 text-sm text-red-500">
                      {formError}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
            <button
              className="Button_Form mt-4 w-full rounded-2xl py-2 text-[16px] font-bold text-white shadow-lg transition duration-500 ease-in-out hover:bg-lime-600 hover:shadow-xl"
              type="submit"
            >
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </>
  );
};


export default ChangePassForm;
