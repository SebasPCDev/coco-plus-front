import { useState } from 'react';
import { useUserContext } from '../../../context';
import PostNewUserReceptCoworking from '@/utils/posts/postNewUserReceptCoworking';
import { initialNewReceptionistForm } from '@/utils/constants/editCoworking/addRecceptionists/initialNewReceptionistForm';
const UseCoworkingReceptionists = ({ id }: { id: string }) => {
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
  const handleClickNewUser = async (e: MouseEvent) => {
    e.preventDefault();

    const response = await PostNewUserReceptCoworking({
      newUserForm,
      token,
    });

    setIsModalOpen(false);
    //   getData();
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
