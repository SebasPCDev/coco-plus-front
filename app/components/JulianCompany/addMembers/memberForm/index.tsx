'use client';
import React, { useState } from 'react';
import { PhoneInput } from "react-international-phone";
import 'react-international-phone/style.css';
import { formDataCompaniesAddEmployee } from '@/utils/arraysforms/companyAddEmployeeForm';
import useCompaniesFormAddEmployee from '@/app/components/requests/companiesForm/useCompaniesAddMemberForm';
import IAddEmployeeInfo from '@/utils/types/requests/companiesFormAddEmployeeInterface';
import IAddMembersErrorInfo from '@/utils/types/requests/companiesFormAddEmployeeErrorInterface';

const MemberForm: React.FC = () => {
  const { 
    companiesInfoAddEmployee, 
    companiesInfoErrorAddEmployee, 
    handleChange, 
    handleChangePhone, 
    handleSubmit, 
    handleCancel 
  } = useCompaniesFormAddEmployee();

  const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});

  const handleBlur = (name: string) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));
  };

  return (
    <>
      <form className="container mx-auto py-8" onSubmit={handleSubmit}>
        <h2 className="mb-3 mt-4 text-lg font-semibold">Nuevo Empleado</h2>
        
        <div>
          <h3 className="mb-1 mt-4 text-lg font-semibold">Nombre</h3>
          <div className="grid grid-cols-2 gap-4">
            {formDataCompaniesAddEmployee.slice(0, 2).map(({ name, label, type, placeholder, required }) => (
              <div key={name} className="mt-4">
                <label htmlFor={name} className="label-form">
                  {label}{required && '*'}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  className="input-form"
                  onChange={handleChange}
                  onBlur={() => handleBlur(name)}
                  value={companiesInfoAddEmployee[name as keyof IAddEmployeeInfo] || ''}
                />
                {touchedFields[name] && (
                  <p className="input-error">{companiesInfoErrorAddEmployee[name as keyof IAddMembersErrorInfo]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-1 mt-4 text-lg font-semibold">Detalles Contacto</h3>
          <div className="grid grid-cols-2 gap-4">
            {formDataCompaniesAddEmployee.slice(2, 4).map(({ name, label, type, placeholder, required }) => (
              <div key={name} className="mt-4">
                <label htmlFor={name} className="label-form">
                  {label}{required && '*'}
                </label>
                {name === 'phone' ? (
                  <PhoneInput
                    defaultCountry="ar"
                    name={name}
                    value={companiesInfoAddEmployee[name as keyof IAddEmployeeInfo]?.toString() || ''}
                    onChange={(phone) => handleChangePhone(name, phone)}
                    onBlur={() => handleBlur(name)}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className="input-form"
                    onChange={handleChange}
                    onBlur={() => handleBlur(name)}
                    value={companiesInfoAddEmployee[name as keyof IAddEmployeeInfo] || ''}
                  />
                )}
                {touchedFields[name] && (
                  <p className="input-error">{companiesInfoErrorAddEmployee[name as keyof IAddMembersErrorInfo]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-1 mt-4 text-lg font-semibold">Información Adicional</h3>
          <div className="grid grid-cols-2 gap-4">
            {formDataCompaniesAddEmployee.slice(4, 5).map(({ name, label, type, placeholder, required }) => (
              <div key={name} className="mt-4">
                <label htmlFor={name} className="label-form">
                  {label}{required && '*'}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  className="input-form"
                  onChange={handleChange}
                  onBlur={() => handleBlur(name)}
                  value={companiesInfoAddEmployee[name as keyof IAddEmployeeInfo] || ''}
                />
                {touchedFields[name] && (
                  <p className="input-error">{companiesInfoErrorAddEmployee[name as keyof IAddMembersErrorInfo]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-1 mt-4 text-lg font-semibold">Permisos</h3>
          <div className="grid grid-cols-2 gap-4">
            {formDataCompaniesAddEmployee.slice(5).map(({ name, label, type, placeholder, required }) => (
              <div key={name} className="mt-4">
                <label htmlFor={name} className="label-form">
                  {label}{required && '*'}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required={required}
                  className="input-form"
                  onChange={handleChange}
                  onBlur={() => handleBlur(name)}
                  value={companiesInfoAddEmployee[name as keyof IAddEmployeeInfo] || ''}
                />
                {touchedFields[name] && (
                  <p className="input-error">{companiesInfoErrorAddEmployee[name as keyof IAddMembersErrorInfo]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-cancel"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn btn-confirm"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};

export default MemberForm;
