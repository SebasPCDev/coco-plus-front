import { useState } from 'react';
import { useUserContext } from '../../../context';
import PostNewUserReceptCoworking from '@/utils/posts/postNewUserReceptCoworking';
import { initialNewReceptionistForm } from '@/utils/constants/editCoworking/addRecceptionists/initialNewReceptionistForm';
import Swal from 'sweetalert2';
const UseCoworkingReceptionists = ({
  id,
  getData,
}: {
  id: string;
  getData: any;
}) => {
  const { token } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserForm, setNewUserForm] = useState({
    ...initialNewReceptionistForm,
    coworkingId: id,
  });
  const handlechangeNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserForm({ ...newUserForm, [name]: value });
  };
  const handleClickNewUser = async (e: any) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: 'crearas un nuevo Recepcionostar para el Coworking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
    });

    if (result.isConfirmed) {
      try {
        const response = await PostNewUserReceptCoworking({
          newUserForm,
          token,
        });
        await getData();
        Swal.fire({
          title:
            'se ha creado un nuevo recepcionista para este coworking, las credeciales de acceso fueron enviadas  a su correo',
          icon: 'success',
          timer: 4000,
          showConfirmButton: false,
        });
      } catch (error) {
        alert(error.response?.data?.message || 'Error al crear recepcionista');
      }
      setIsModalOpen(false);
      getData();
    }
  };

  return {
    newUserForm,
    handlechangeNewUser,
    handleClickNewUser,
    isModalOpen,
    setIsModalOpen,
  };
};

export default UseCoworkingReceptionists;
