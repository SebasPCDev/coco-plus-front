import PostNewCoworking from '@/utils/posts/postNewCoworking';
import { useState } from 'react';
import { useUserContext } from '../../context';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
const useCreateCoworking = () => {
  const router = useRouter();
  const initialState: any = {
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
  };

  const handleChangePhone = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await Swal.fire({
        title: 'Estás seguro de crear este Coworking?',
        showCancelButton: true,
        confirmButtonText: 'Crear',
        confirmButtonColor: '#4caf50',
        reverseButtons: true,
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        if (result.isConfirmed && token) {
          const response = await PostNewCoworking({ formData, token });
          Swal.fire(
            `Se ha creado el coworking ${formData.name}`,
            '',
            'success',
          );
          router.push('/dashboard/adminCoworking/myCoworkings');
        } else if (result.isDenied) {
          Swal.fire('se cancelo', '', 'info');

          return;
        }
      });
    } catch (error: any) {
      Swal.fire({
        title: 'Error enviando la solicitud',
        text: error.response.data.message,
        icon: 'error',
      });
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    handleChangePhone,
  };
};

export default useCreateCoworking;
