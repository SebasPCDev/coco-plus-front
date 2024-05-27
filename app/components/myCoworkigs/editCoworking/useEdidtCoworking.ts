import { useUserContext } from '../../context';
import GetCoworkingDetailForAdmin from '@/utils/gets/getCoworkingDetailForAdmisn';
import { useEffect, useState } from 'react';
import PutUpdateCoworking from '@/utils/puts/putUpdateCoworking';
import Swal from 'sweetalert2';
import { Coworking } from '@/utils/types/editCoworking/editInfo/editCoworkingInterfaces';
import { initialCoworking } from '@/utils/constants/editCoworking/editInfo/initialCoworking';
import { useMyCoworkingContext } from '../myCoworkingConstext';

const useEdidtCoworking = ({ id }: { id: string }) => {
  const { Mycoworking, setMyCoworking } = useMyCoworkingContext();
  const { token } = useUserContext();
  const [newInfo, setNewInfo] = useState({});

  const [coworking, setCoworking] = useState<Coworking>(initialCoworking);

  const getData = async () => {
    const coworkingData = await GetCoworkingDetailForAdmin({ id, token });
    setCoworking(coworkingData);
    setMyCoworking(coworkingData);
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
  };
  useEffect(() => {
    setNewInfo({
      ...newInfo,
      country: Mycoworking?.country,
      state: Mycoworking?.state,
      city: Mycoworking?.city,
      address: Mycoworking?.address,
      lat: Mycoworking?.lat,
      long: Mycoworking?.long,
    });
  }, [Mycoworking]);

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
    await getData();
    console.log(newInfo);

    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);
  const onClickActivate = async () => {
    const newInfo = {
      status: 'active',
    };
    try {
      const response = await PutUpdateCoworking({ id, newInfo, token });
      await getData();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return {
    handleClick,
    handleChange,
    coworking,
    setNewInfo,
    newInfo,
    onClickActivate,
    getData
  };
};

export default useEdidtCoworking;
