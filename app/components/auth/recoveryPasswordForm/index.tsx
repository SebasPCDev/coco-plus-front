'use client';

import React from 'react';
import { ChangePassFormArray } from '@/utils/arraysforms/changePassForm';
import IChangePassForm from '@/utils/types/auth/changePassFormInterface';

import EyeIcon from '../../icons/eye';
import EyeSlashIcon from '../../icons/eyeSlash';
import useRecoveryPasswordForm from './useRecoveryPasswordForm';


const RecoveryPasswordForm = ({ searchParams }: { searchParams: { token: string } }) => {

  const token = searchParams.token;

  const { changePassForm, changePassFormError, handleChange, handleSubmit, showPassword,
    togglePasswordVisibility, showConfPassword, toggleConfPasswordVisibility } = useRecoveryPasswordForm(token as string);

  return (
    <>
      <div className="relative h-screen bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
        <div className="flex justify-center items-center h-full w-full md:w-1/2">
          <form
            className="flex flex-col gap-4 rounded-2xl bg-custom-white mx-10 md:ml-12 px-8 pb-8 pt-6 shadow-lg max-w-[400px] w-full"
            onSubmit={handleSubmit}
          >
            <h1 className="m-6 text-center text-2xl font-bold text-gray-800">
              Cambiar contraseña
            </h1>
            {ChangePassFormArray.map(({ name, label, type, placeholder }) => {
              const formValue = changePassForm[name as keyof IChangePassForm];
              const formError = changePassFormError[name as keyof IChangePassForm];

              return (
                <React.Fragment key={name}>
                  <div className="mb-4 flex flex-col gap-4">
                    <label className="label-form" htmlFor={name}>
                      {label}
                    </label>
                    <div className="relative flex items-center justify-center gap-2 rounded-lg border-2 bg-custom-white">
                      <input
                        type={(name === 'password' && showPassword || name === 'confPassword' && showConfPassword) ? 'text' : type}
                        name={name}
                        placeholder={placeholder}
                        className="input-form"
                        onChange={handleChange}
                        value={formValue}
                      />
                      {name === 'password' && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 text-gray-700 px-2 py-1 rounded"
                        >
                          {showPassword ?
                            <EyeIcon className='' />
                            : <EyeSlashIcon className='' />
                          }

                        </button>
                      )}
                      {name === 'confPassword' && (
                        <button
                          type="button"
                          onClick={toggleConfPasswordVisibility}
                          className="absolute right-3 text-gray-700 px-2 py-1 rounded"
                        >
                          {showConfPassword ?
                            <EyeIcon className='' />
                            : <EyeSlashIcon className='' />
                          }
                        </button>
                      )}
                    </div>
                    <p className="input-error">
                      {formError}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
            <button
              className="btn btn-confirm"
              type="submit"
            >
              Recuperar contraseña
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecoveryPasswordForm;
