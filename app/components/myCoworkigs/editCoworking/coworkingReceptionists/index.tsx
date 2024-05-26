'use client';
import arrayFormNewUserCoworking from '@/utils/arraysforms/NewUserRecepCoworking';
import InfoUsersAdmins from '../../MyCoworkingDetail/componentsDetail/users';
import Modal from '../../Modals/ModalNewUser';
import UseCoworkingReceptionists from './useCoworkingReceptionists';

const CoworkingReceptionists = ({
  coworking,
  id,
  getData,
}: {
  coworking: any;
  id: string;
  getData: any;
}) => {
  const {
    newUserForm,
    handlechangeNewUser,
    handleClickNewUser,
    isModalOpen,
    setIsModalOpen,
  } = UseCoworkingReceptionists({ id, getData });

  return (
    <div className="col-span-2 rounded-lg border p-4 shadow-sm">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mx-auto w-1/2 rounded bg-custom-primary px-4 py-2 text-white"
      >
        Agregar Recepcionista
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {arrayFormNewUserCoworking.map((field) => (
          <div key={field.name} className="mb-4  flex flex-col">
            <label htmlFor={field.name} className="label-form">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={(newUserForm as any)[field.name]} // TypeScript might need this cast
              onChange={handlechangeNewUser}
              className="w-full rounded border bg-gray-100 p-2"
            />
          </div>
        ))}

        <button
          className="mx-auto w-1/2 rounded bg-custom-primary px-4 py-2 text-white"
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
