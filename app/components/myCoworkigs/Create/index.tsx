'use client';

import { arrayNewCoworkingForm } from '@/utils/arraysforms/arrayNewCoworking';
import generateTimeOptions from '@/utils/timeoptions/generateTimeOptions';
import useCreateCoworking from './useCreateCoworking';

const CoworkingForm = () => {
  const { formData, setFormData, handleChange, handleSubmit } =
    useCreateCoworking();

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-semibold">Crear Nuevo Coworking</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 space-x-4 space-y-2 "
      >
        {arrayNewCoworkingForm.map((section, index) => (
          <div
            key={index}
            className={
              section.name === 'message'
                ? 'col-span-2'
                : 'col-span-2 md:col-span-1'
            }
          >
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
                className="block w-full rounded-lg border px-4 py-4 shadow focus:border-blue-500 focus:outline-none"
              >
                <option value="">-- Seleccione --</option>
                {generateTimeOptions().map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={section.type}
                id={section.name}
                name={section.name}
                placeholder={section.placeholder}
                required={section.required}
                value={formData[section.name] || ''}
                onChange={handleChange}
                className="block w-full rounded-lg border px-4 py-4 shadow focus:border-blue-500 focus:outline-none"
              />
            )}
          </div>
        ))}
        <div className="col-span-2 mt-6">
          <button
            type="submit"
            className="  block w-full  rounded-lg bg-blue-500 px-4 py-4 text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoworkingForm;
