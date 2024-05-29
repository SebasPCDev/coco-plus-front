'use client';

import Modal from '../../Modals/ModalNewUser';
import UpdatedLocationMap from '../mapUdateLocation';
import { FormToRender } from '@/utils/arraysforms/arrayUpdateLocation';
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
    cameraPropsNew,
    countries,
    states,
    cities,
    handleChangeform,
    optionRender,
  } = UseEditLocation();

  return (
    <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
      {optionRender}
      <h2 className="mb-4 text-xl font-semibold">Ubicación</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="country" className="w-1/4 pr-2">
            Pais:
          </label>
          <select
            className="w-3/4 rounded border bg-gray-100 p-2"
            name="country"
            id="country"
            onChange={handleChangeform}
          >
            <option className="select-option" value="">
              ---Seleccionar Pais---
            </option>
            {countries.map((country, index) => {
              console.log(country);

              const { id, name } = country;

              return (
                <option
                  className="w-3/4 rounded border bg-gray-100 p-2"
                  value={String(id)}
                  id={String(id)}
                  key={`${id}-${index}`}
                >
                  {name}
                </option>
              );
            })}

            <option className="select-option" value="0">
              otro
            </option>
          </select>
        </div>

        {optionRender !== 'oterCountry' && (
          <div className="flex items-center">
            <label htmlFor="state" className="w-1/4 pr-2">
              Estado:
            </label>
            <select
              className="w-3/4 rounded border bg-gray-100 p-2"
              name="state"
              id="state"
              onChange={handleChangeform}
            >
              <option className="select-option" value="">
                ---Seleccionar estado---
              </option>
              ;
              {states?.map((state, index) => {
                console.log(state);

                const { id, name } = state;

                return (
                  <option
                    className="w-3/4 rounded border bg-gray-100 p-2"
                    value={String(id)}
                    id={String(id)}
                    key={`${id}-${index}`}
                  >
                    {name}
                  </option>
                );
              })}
              <option className="select-option" value="0">
                otro
              </option>
            </select>
          </div>
        )}
        {optionRender !== 'oterCountry' && optionRender !== 'oterState' && (
          <div className="flex items-center">
            <label htmlFor="city" className="w-1/4 pr-2">
              Ciudad:
            </label>
            <select
              className="w-3/4 rounded border bg-gray-100 p-2"
              name="city"
              id="city"
              onChange={handleChangeform}
            >
              <option className="select-option" value="">
                ---Seleccionar ciudad---
              </option>
              ;
              {cities?.map((city, index) => {
                console.log(city);

                const { id, name } = city;

                return (
                  <option
                    className="w-3/4 rounded border bg-gray-100 p-2"
                    value={String(id)}
                    id={String(id)}
                    key={`${id}-${index}`}
                  >
                    {name}
                  </option>
                );
              })}
              <option className="select-option" value="0">
                otro
              </option>
            </select>
          </div>
        )}

        {FormToRender[optionRender].map((location) => (
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
      <UpdatedLocationMap cameraPropsNew={cameraPropsNew} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="mb-4 text-xl font-bold">Seleccionar Opciones</h2>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="checkbox"
                id={option.id}
                name={option.name}
                value={option.name}
                // checked={idCheck === option.id}
                onChange={handleCheck}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor={option.name} className="ml-2">
                {option.display_name},{option.name}
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
