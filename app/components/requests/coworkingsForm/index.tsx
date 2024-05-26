"use client";

import React from 'react';
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';

import { formDataCoworkings } from "@/utils/arraysforms/coworkingsForms";
import ICoworkingsInfo from "@/utils/types/requests/coworkingsFormInterface";
import useCoworkingsForm from './useCoworkingsForm';
import Footer from '@/app/components/JulianCompany/home/primerHome/footerHome';


const CoworkingsForm = () => {

  const { coworkingInfo, coworkingInfoError, handleChange, handleChangePhone, handleSubmit, handleCancel, generateTimeOptions } = useCoworkingsForm();

  return (
    <>
      <form
        className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold text-center mb-8 col-span-2">
          Soy Coworking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formDataCoworkings.map(
            ({ name, label, type, placeholder, required }) => (
              <div
                key={name}
                className={`flex flex-col ${name === "message" ? "md:col-span-2" : ""
                  }`}
              >
                <label
                  htmlFor={name}
                  className="label-form"
                >
                  {label}
                </label>

                {name === "open" || name === "close" ? (
                  <div className="relative">
                    <select
                      name={name}
                      required={required}
                      className="input-form"
                      onChange={handleChange}
                      value={coworkingInfo[name as keyof ICoworkingsInfo]}
                    >
                      <option value="">Selecciona una hora</option>
                      {generateTimeOptions().map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                ) : (name === "phone" || name === "companyPhone") ? (
                  <PhoneInput
                    defaultCountry="ar"
                    name={name}
                    value={coworkingInfo[name as keyof ICoworkingsInfo].toString()}
                    onChange={(phone) => { handleChangePhone(name, phone) }}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className="input-form"
                    onChange={handleChange}
                    value={coworkingInfo[name as keyof ICoworkingsInfo]}
                  />
                )}
                <p className="input-error">
                  {coworkingInfoError[name as keyof ICoworkingsInfo]}
                </p>
              </div>
            )
          )}
        </div>
        <div className='mt-8 flex justify-between'>
          <button
            onClick={handleCancel}
            className="btn btn-cancel"
          >
            Cancelar
          </button>
          <button
            className="btn btn-confirm"
            type="submit"
          >
            Enviar Solicitud
          </button>
        </div>

      </form>
      <Footer />
    </>
  );
};

export default CoworkingsForm;