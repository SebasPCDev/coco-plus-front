'use client';

import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { formProfileCompany } from '@/utils/arraysforms/profileCompany';
import useCompanyProfile from './useCompanyProfile';
import { ICompanyProfile } from '@/utils/types/companies/companyProfileInterface';
import ICompanyProfileFormError from '@/utils/types/companies/companyProfileFormErrorInterface';
import { COMPANY_SIZE } from '@/utils/types/requests/companySize.enum';

const CompanyProfile = () => {
  const {
    companyProfile,
    companyProfileError,
    handleChange,
    handleChangePhone,
    handleCancel,
    handleSubmit,
  } = useCompanyProfile();

  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});

  const handleBlur = (name: string) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));

    const untouchedFields = formProfileCompany
      .map(({ name }) => name)
      .filter((fieldName) => !touchedFields[fieldName]);

    const newTouchedFields = untouchedFields.reduce(
      (acc, fieldName) => ({
        ...acc,
        [fieldName]: true,
      }),
      touchedFields,
    );

    setTouchedFields(newTouchedFields);
  };

  return (
    <form
      className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="col-span-2 mb-8 text-center text-4xl font-bold">
        Perfil de la Empresa
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {formProfileCompany.map(({ name, label, type, placeholder }) => (
          <div
            key={name}
            className={`flex flex-col ${
              ['message', 'position'].includes(name) ? 'md:col-span-2' : ''
            }`}
          >
            <label htmlFor={name} className="label-form">
              {label}
            </label>
            {name === 'phone' || name === 'companyPhone' ? (
              <PhoneInput
                defaultCountry="ar"
                name={name}
                value={companyProfile[name as keyof ICompanyProfile].toString()}
                onChange={(phone) => handleChangePhone(name, phone)}
                onBlur={() => handleBlur(name)}
              />
            ) : name === 'size' ? (
              <div className="relative">
                <select
                  name={name}
                  className="input-form"
                  onChange={(event) => handleChange(name, event.target.value)}
                  value={companyProfile[
                    name as keyof ICompanyProfile
                  ].toString()}
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
                    className="h-4 w-4 fill-current"
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
                className="input-form"
                onChange={(event) => handleChange(name, event.target.value)}
                onBlur={() => handleBlur(name)}
                value={companyProfile[name as keyof ICompanyProfile].toString()}
              />
            )}
            {touchedFields[name] && (
              <p className="input-error text-red-600">
                {companyProfileError[name as keyof ICompanyProfileFormError]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button type="button" onClick={handleCancel} className="btn btn-cancel">
          Cancelar
        </button>
        <button className="btn btn-confirm" type="submit">
          Modificar perfil
        </button>
      </div>
    </form>
  );
};

export default CompanyProfile;
