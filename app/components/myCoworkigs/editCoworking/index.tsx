'use client';


import CoworkingStatus from '../statusCoworking.tsx';
import EditCoworkingLocation from './coworkingLocation';
import CoworkingReceptionists from './coworkingReceptionists';
import ImagesContent from './imagesContent';
import useEdidtCoworking from './useEdidtCoworking';

export default function MyCoworkingDetailEdit({ id }: { id: string }) {
  const {
    handleClick,
    handleChange,
    coworking,
    onClickActivate
  } = useEdidtCoworking({ id: id });
  

  return (
    
      <div className="container mx-auto p-4">
        <input
          onChange={handleChange}
          className="  mb-4 bg-gray-100 text-center text-4xl font-bold"
          type="text"
          value={coworking.name || 'Nombre del Coworking'}
          name="name"
        />
        <div className="flex flex-col md:flex-row">
          {/* Contenedor 1 */}
          <div className="mt-4 max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:mt-0 md:w-2/3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className=" col-span-2 rounded-lg border  p-4 shadow-sm md:col-span-1">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div className="flex">
                  <p>
                    <strong>Phone:</strong>
                  </p>
                  <input
                    onChange={handleChange}
                    className=" bg-gray-100"
                    type="text"
                    value={coworking.phone}
                    name="phone"
                  />
                </div>
                <div className="flex">
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <input
                    onChange={handleChange}
                    className=" bg-gray-100"
                    type="text"
                    value={coworking.email}
                    name="email"
                  />
                </div>
              </div>

              <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
                <h2 className="text-xl font-semibold">Operating Hours</h2>
                <div className="flex">
                  <p>
                    <strong>Open:</strong>
                  </p>
                  <input
                    onChange={handleChange}
                    className=" bg-gray-100"
                    type="text"
                    value={coworking.open}
                    name="open"
                    placeholder="Apertura"
                  />
                </div>
                <div className="flex">
                  <p>
                    <strong>Close:</strong>
                  </p>
                  <input
                    onChange={handleChange}
                    className=" bg-gray-100"
                    type="text"
                    value={coworking.close}
                    name="close"
                    placeholder="Cierre"
                  />
                </div>
              </div>

              <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
                <h2 className="text-xl font-semibold">Capacity & Status</h2>
                <div className="flex">
                  <p>
                    <strong>Capacity:</strong>
                  </p>
                  <input
                    onChange={handleChange}
                    className=" bg-gray-100"
                    type="text"
                    value={coworking.capacity}
                    name="capacity"
                    placeholder="Capacidad"
                  />
                </div>
                <div className="flex gap-4">
                  <p>
                    <strong>Status:</strong>
                  </p>
                  <div className="flex gap-4">
                    <CoworkingStatus status={coworking.status} />
                    {coworking.status === 'pending' && (
                      <button
                        onClick={onClickActivate}
                        className="rounded-lg bg-red-500 p-2 text-white"
                      >
                        Activar
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <EditCoworkingLocation coworking={coworking} />
              <button
                onClick={handleClick}
                className="mt-4 block w-full rounded-lg border bg-gray-100 md:w-1/2"
              >
                Actualizar Info
              </button>
              <CoworkingReceptionists coworking={coworking} id={id} />
            </div>
          </div>
          {/* Contenedor 2 */}
          <ImagesContent coworking={coworking} />
        </div>
      </div>
    
  );
}
