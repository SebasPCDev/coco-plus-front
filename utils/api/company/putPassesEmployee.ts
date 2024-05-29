import IAddEmployeeInfo from '@/utils/types/requests/companiesFormAddEmployeeInterface';
import { axiosApi } from '../api';

const putPassesEmployee = async (data: any) => {
  try {
    const response = await axiosApi.put(`/companyId/update-employee/${data.id}`);
    return response.data;
  } catch (error: any) {
    let message = '';
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
};

export default putPassesEmployee;