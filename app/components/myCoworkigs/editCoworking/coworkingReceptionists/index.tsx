"use client";
import arrayFormNewUserCoworking from '@/utils/arraysforms/NewUserRecepCoworking';
import InfoUsersAdmins from '../../MyCoworkingDetail/componentsDetail/users';
import Modal from '../../Modals/ModalNewUser';
import UseCoworkingReceptionists from './useCoworkingReceptionists';


const CoworkingReceptionists = ({ coworking, id }: { coworking: any, id: string }) => {
  
  const {
    newUserForm,
    handlechangeNewUser,
    handleClickNewUser,
    isModalOpen,
    setIsModalOpen,
  } = UseCoworkingReceptionists({ id });
 

  
  return (
    <div className="col-span-2 rounded-lg border p-4 shadow-sm">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 block w-full rounded-lg border bg-gray-100 md:w-1/2"
      >
        Agregar Recepcionista
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {arrayFormNewUserCoworking.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-2 text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={(newUserForm as any)[field.name]} // TypeScript might need this cast
              onChange={handlechangeNewUser}
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          className="rounded bg-red-600 px-4 py-2 text-white"
          onClick={handleClickNewUser}
        >
          Crear usuario
        </button>
      </Modal>

      <h2 className="text-xl font-semibold">Administradores</h2>
      {coworking.user.map((user) => (
        <InfoUsersAdmins key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CoworkingReceptionists;
