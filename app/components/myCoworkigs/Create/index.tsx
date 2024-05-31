'use client';

import { arrayNewCoworkingForm } from '@/utils/arraysforms/arrayNewCoworking';
import generateTimeOptions from '@/utils/timeoptions/generateTimeOptions';
import useCreateCoworking from './useCreateCoworking';
import { useRouter } from 'next/navigation';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import ICoworkingsErrorInfo from '@/utils/types/requests/coworkingFormErrorInterface';

const CoworkingForm = () => {
  const {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    handleChangePhone,
    errors,
  } = useCreateCoworking();
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        CREAR NUEVO COWORKING
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 ">
        {arrayNewCoworkingForm.map((section, index) => (
          <div
            key={index}
            className={
              section.name === 'message'
                ? 'col-span-2'
                : 'col-span-2 md:col-span-1'
            }
          >
            <div className="p-3">
              <label htmlFor={section.name} className="label-form">
                {section.label}
              </label>
              {section.name === 'open' || section.name === 'close' ? (
                <select
                  id={section.name}
                  name={section.name}
                  required={section.required}
                  value={formData[section.name] || ''}
                  onChange={handleChange}
                  className="select-option"
                >
                  <option value="">-- Seleccione --</option>
                  {generateTimeOptions().map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : section.name === 'phone' ? (
                <PhoneInput
                  defaultCountry="ar"
                  name={section.name}
                  value={formData[section.name] || ''}
                  onChange={(phone) => handleChangePhone(section.name, phone)}
                />
              ) : (
                <input
                  type={section.type}
                  id={section.name}
                  name={section.name}
                  placeholder={section.placeholder}
                  required={section.required}
                  value={formData[section.name] || ''}
                  onChange={handleChange}
                  className="input-form"
                />
              )}
              <p className="input-error">
                {errors[section.name] as keyof ICoworkingsErrorInfo}
              </p>
            </div>
          </div>
        ))}

        <div className="col-span-2 mt-6 flex gap-5 p-3">
          <button
            type="button"
            className="btn btn-cancel"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-confirm">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoworkingForm;
