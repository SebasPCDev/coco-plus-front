import PostNewCoworking from '@/utils/posts/postNewCoworking';
import { useState } from 'react';
import { useUserContext } from '../../context';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
const useCreateCoworking = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await PostNewCoworking({ formData, token });

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
          router.push('/dashboard/adminCoworking/myCoworkings');
        } else if (result.isDenied) {
          Swal.fire('se cancelo', '', 'info');

          return;
        }
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return { formData, setFormData, handleChange, handleSubmit };
};

export default useCreateCoworking;