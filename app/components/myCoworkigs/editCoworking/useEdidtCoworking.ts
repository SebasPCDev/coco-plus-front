import { useUserContext } from '../../context';
import GetCoworkingDetailForAdmin from '@/utils/gets/getCoworkingDetailForAdmisn';
import { useEffect, useState } from 'react';
import PutUpdateCoworking from '@/utils/puts/putUpdateCoworking';
import Swal from 'sweetalert2';
import { Coworking } from '@/utils/types/editCoworking/editInfo/editCoworkingInterfaces';
import { initialCoworking } from '@/utils/constants/editCoworking/editInfo/initialCoworking';

const useEdidtCoworking = ({ id }: { id: string }) => {
  const { token } = useUserContext();
  const [newInfo, setNewInfo] = useState({});

  const [coworking, setCoworking] = useState<Coworking>(initialCoworking);

  const getData = async () => {
    const coworkingData = await GetCoworkingDetailForAdmin({ id, token });
    setCoworking(coworkingData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === 'capacity') {
      setCoworking({ ...coworking, [name]: Number(value) });
      setNewInfo({ ...newInfo, [name]: Number(value) });
    } else {
      setCoworking({ ...coworking, [name]: value });
      setNewInfo({ ...newInfo, [name]: value });
    }

    console.log(newInfo);
  };

  const handleClick = async () => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No'No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('guardado', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
        return;
      }
    });
    const response = await PutUpdateCoworking({ id, newInfo, token });
    getData();
    console.log(newInfo);

    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    handleClick,
    handleChange,
    coworking,
    setNewInfo,
    newInfo,
  };
};

export default useEdidtCoworking;
