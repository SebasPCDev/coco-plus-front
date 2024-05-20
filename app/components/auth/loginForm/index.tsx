'use client';
import { LoginFormArray } from '@/utils/arraysforms/loginForm';
import React from 'react';
import ILoginForm from '@/utils/types/auth/loginFormInterface';
import useLoginForm from './useLoginForm';

const LoginForm = () => {

  const { LoginForm, LoginFormError, handleChange, handleSubmit } = useLoginForm();

  return (
    <>
      <div className="relative h-screen w-full bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
        <div className="flex justify-center items-center h-full w-full md:w-1/2">
          <form
            noValidate
            className="flex flex-col gap-4 rounded-2xl bg-custom-white mx-10 md:ml-12 px-8 pb-8 pt-6 shadow-lg max-w-[400px] w-full"
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
