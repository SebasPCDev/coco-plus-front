'use client';


import CoworkingStatus from '../statusCoworking.tsx';
import EditCoworkingLocation from './coworkingLocation';
import CoworkingReceptionists from './coworkingReceptionists';
import ImagesContent from './imagesContent';
import useEdidtCoworking from './useEdidtCoworking';
import arrayCoworkingUbdateInfo from '@/utils/arraysforms/arrayCoworkingUbdateInfo';

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
      <div className="flex flex-col xl:flex-row">
        {/* Contenedor 1 */}
        <div className="mt-4 max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:mt-0 xl:w-2/3">
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="col-span-2 rounded-lg border p-4 shadow-sm xl:col-span-1">
              {arrayCoworkingUbdateInfo.map((info) => {
                return (
                  <div key={info.name} className="mb-4 flex items-center">
                    <p className="w-1/3 pr-2">
                      <strong>{info.label}:</strong>
                    </p>
                    <input
                      onChange={handleChange}
                      className="flex-grow rounded border bg-gray-100 p-2"
                      type={info.type}
                      value={coworking[info.name] || ''}
                      name={info.name}
                    />
                  </div>
                );
              })}
              <div className="mt-4 flex items-center gap-4">
                <p>
                  <strong>Status:</strong>
                </p>
                <div className="flex items-center gap-4">
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
