'use client';

import { arrayNewCoworkingForm } from '@/utils/arraysforms/arrayNewCoworking';
import PostNewCoworking from '@/utils/posts/postNewCoworking';
import { useState } from 'react';
import { useUserContext } from '../../context';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const CoworkingForm = () => {
  const router = useRouter();
  const initialState = {
    name: '',
    phone: '',
    email: '',
    open: '',
    close: '',
    address: '',
    country: '',
    state: '',
    city: '',
    lat: '',
    long: '',
    capacity: 0,
    message: '',
    status: 'pending',
  };

  const { token } = useUserContext();
  const [formData, setFormData] = useState(initialState);
  const generateTimeOptions = () => {
    const options: string[] = []; // Aquí especificamos que options es un array de strings
    for (let hour = 6; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    let toSet;
    if (name === 'capacity') {
      toSet = { ...formData, [name]: parseInt(value) };
    } else {
      toSet = { ...formData, [name]: value };
    }
    setFormData(toSet);
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Swal.fire({
      title: 'seguro deseasn crear este coworking?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'si, crear',
      denyButtonText: `no`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Se ha creado', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('se cancelo', '', 'info');
        router.push('/dashboard/adminCoworking/myCoworkings');
        return;
      }
    });

    const response = await PostNewCoworking({ formData, token });
    router.push('/dashboard/adminCoworking/myCoworkings');

    console.log(response);
  };

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
            <label
              htmlFor={section.name}
              className="mb-2 block font-semibold text-gray-700"
            >
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
