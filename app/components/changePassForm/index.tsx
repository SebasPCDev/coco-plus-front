'use client';

import React from 'react';
import { ChangePassFormArray } from '@/utils/arraysforms/changePassForm';
import IChangePassForm from '@/utils/types/auth/changePassFormInterface';
import useChangePassForm from './useChangePassForm';

const ChangePassForm = () => {
  const { changePassForm, changePassFormError, handleChange, handleSubmit } = useChangePassForm();

  return (
    <>
      <div className="relative h-screen bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
        <div className="flex justify-center items-center h-full w-full md:w-1/2">
          <form
            className="flex flex-col gap-4 rounded-2xl bg-custom-white mx-10 md:ml-12 px-8 pb-8 pt-6 shadow-lg max-w-[400px] w-full"
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
