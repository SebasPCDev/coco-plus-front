'use client';

import Modal from '../../Modals/ModalNewUser';
import UpdatedLocationMap from '../mapUdateLocation';
import arrayLocation from '@/utils/arraysforms/arrayUpdateLocation';
import UseEditLocation from './useEditLocation';


const EditCoworkingLocation = ({ coworking }: { coworking: any }) => {

  const {
    address,
    handleChange,
    handleBlur,
    handleCheck,
    options,
    isModalOpen,
    setIsModalOpen,
    setOptions,
    currentName,
    setCurrentName,
    setCorder,
  } = UseEditLocation();
  

  
  return (
    <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
      <h2 className="mb-4 text-xl font-semibold">Address</h2>
      <div className="space-y-4">
        {arrayLocation.map((location) => (
          <div key={location.name} className="flex items-center">
            <label htmlFor={location.name} className="w-1/4 pr-2">
              {location.placeholder}:
            </label>
            <input
              id={location.name}
              className="w-3/4 rounded border bg-gray-100 p-2"
              type={location.type}
              value={address?.[location.name] || ''}
              name={location.name}
              placeholder={location.placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        ))}
      </div>
      <UpdatedLocationMap />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="mb-4 text-xl font-bold">Seleccionar Opciones</h2>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.name} className="flex items-center">
              <input
                type="checkbox"
                id={option.name}
                name={option.name}
                value={option.name}
                checked={address[currentName] === option.name}
                onChange={handleCheck}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor={option.name} className="ml-2">
                {option.display_name}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 rounded-md bg-custom-primary px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Aceptar
        </button>
      </Modal>
    </div>
  );
};

export default EditCoworkingLocation;
