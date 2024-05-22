"use client";

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { formProfileCompany } from '@/utils/arraysforms/profileCompany';
import useCompanyProfile from './useCompanyProfile';
import { ICompanyProfile } from '@/utils/types/companies/companyProfile';
import ICompanyProfileFormError from '@/utils/types/companies/companyProfileFormError';
import { COMPANY_SIZE } from '@/utils/types/requests/companySize.enum';

const CompanyProfile = () => {
  const { companyProfile, companyProfileError, handleChange, handleChangePhone, handleCancel, handleSubmit } = useCompanyProfile();

  return (
    <form className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white" onSubmit={handleSubmit} >
      <h1 className="text-4xl font-bold text-center mb-8 col-span-2">Perfil de la Empresa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formProfileCompany.map(({ name, label, type, placeholder, required }) => (
          <div key={name} className={`flex flex-col ${["message", "position"].includes(name) ? "md:col-span-2" : ""}`}>
            <label htmlFor={name} className="label-form">
              {label}
            </label>
            {name === "phone" || name === "companyPhone" ? (

              <PhoneInput
                defaultCountry="ar"
                name={name}
                value={companyProfile[name as keyof ICompanyProfile].toString()}
                onChange={(phone) => handleChangePhone(name, phone)}
              />
            ) : ((name === "size") ? (
              <div className="relative">
                <select
                  name={name}
                  required={required}
                  className="input-form"
                  onChange={handleChange}
                  value={companyProfile[name as keyof ICompanyProfile]}
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
                value={companyProfile[name as keyof ICompanyProfile]}
              />
            ))}
            <p className="input-error">{companyProfileError[name as keyof ICompanyProfileFormError]}</p>
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
          Modificar perfil
        </button>
      </div>
    </form>
  )
}
export default CompanyProfile

