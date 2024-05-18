'use client';
import { LoginFormArray } from '../../../utils/arraysforms/loginForm';
import React, { useState } from 'react';
import ILoginForm from '../../../utils/types/loginFormInterface';
import PostLogin from '../../../utils/posts/postSignin';
import { useUserContext } from '../context';
import { useRouter } from 'next/navigation';
import ILoginErrorForm from '../../../utils/types/loginFormErrorInterface';
import loginValidation from '../../../utils/formValidation/loginValidation';
import redirectionByRole from '../../../utils/ redirects/redirectByRole';
import Swal from 'sweetalert2';
import { HandleLogin } from '@/actions/auth';

const LoginForm = () => {
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
        showConfirmButton: false,
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
      });
    }
  };

  return (
    <>
      <div className="relative h-screen bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
        <div className="relative h-full w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
          <form
            noValidate
            className="md:3/4 absolute left-0 top-0 mb-4 flex w-1/2 translate-x-1/2 translate-y-1/2 transform flex-col gap-4 rounded-2xl bg-custom-white px-8 pb-8 pt-6 shadow-lg sm:w-full lg:w-1/2 "
            onSubmit={handleSubmit}
          >
            <h1 className="m-6 text-center text-3xl font-bold text-gray-800">
              Iniciar Sesión
            </h1>
            {LoginFormArray.map(({ name, label, type, placeholder }) => {
              const formValue = LoginForm[name as keyof ILoginForm];
              const formError = LoginFormError[name as keyof ILoginForm];

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
              className="Button_Form mt-4 w-full rounded-2xl py-2 text-[16px] font-bold text-white shadow-lg transition duration-500 ease-in-out hover:bg-custom-primary hover:shadow-xl"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
