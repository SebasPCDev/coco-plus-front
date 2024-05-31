import PostNewCoworking from '@/utils/posts/postNewCoworking';
import { useEffect, useState } from 'react';
import { useUserContext } from '../../context';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import newCoworkingValidation from '@/utils/formValidation/newCoworkingValidation';
import ICoworkingsErrorInfo from '@/utils/types/requests/coworkingFormErrorInterface';
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
  const [errors, setErrors] = useState({} as ICoworkingsErrorInfo);

  useEffect(() => {
    const errors = newCoworkingValidation(formData);
    setErrors(errors);
  }, [formData]);

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
    const errors = newCoworkingValidation(formData);
    if (Object.keys(errors).length > 0) {
      Swal.fire({
        title: 'Error en el formulario',
        text: 'Por favor revisa los campos marcados en rojo',
        icon: 'error',
      });
      return;
    }
    try {
      await Swal.fire({
        title: 'Estás seguro de crear este Coworking?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        confirmButtonColor: '#222B2D',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed && token) {
          const response = await PostNewCoworking({ formData, token });
          Swal.fire({
            title: `Se ha creado el coworking ${formData.name}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
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
    errors,
  };
};

export default useCreateCoworking;
