"use client";
import React from 'react';

import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { formDataCompanies } from "@/utils/arraysforms/companysForm";
import ICompaniesInfo from "@/utils/types/requests/companiesFormInterface";
import useCompaniesForm from './useCompaniesForm';
import { COMPANY_SIZE } from '@/utils/types/requests/companySize.enum';
import Footer from '../../Footer';


const CompaniesForm = () => {

  const { companiesInfo, companiesInfoError, handleChange, handleChangePhone, handleSubmit, handleCancel } = useCompaniesForm();

  return (
    <>
      <form className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-center mb-8 col-span-2">Soy una Empresa</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formDataCompanies.map(({ name, label, type, placeholder, required }) => (
            <div key={name} className={`flex flex-col ${["message", "position"].includes(name) ? "md:col-span-2" : ""}`}>
              <label htmlFor={name} className="label-form">
                {label}
              </label>
              {name === "phone" || name === "companyPhone" ? (
                <PhoneInput
                  defaultCountry="ar"
                  name={name}
                  value={companiesInfo[name as keyof ICompaniesInfo].toString()}
                  onChange={(phone) => handleChangePhone(name, phone)}
                />
              ) : ((name === "size") ? (
                <div className="relative">
                  <select
                    name={name}
                    required={required}
                    className="input-form"
                    onChange={handleChange}
                    value={companiesInfo[name as keyof ICompaniesInfo]}
                  >
                    <option value="">Selecciona una cantidad</option>
                    {COMPANY_SIZE.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.value}
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
              ) : (
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  className="input-form"
                  onChange={handleChange}
                  value={companiesInfo[name as keyof ICompaniesInfo]}
                />
              ))}
              <p className="input-error">{companiesInfoError[name as keyof ICompaniesInfo]}</p>
            </div>
          ))}
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

export default CompaniesForm;
