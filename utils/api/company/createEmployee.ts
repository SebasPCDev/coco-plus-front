import IAddEmployeeInfo from '@/utils/types/requests/companiesFormAddEmployeeInterface';
import { axiosApi } from '../api';

const createEmployee = async (data: IAddEmployeeInfo) => {
  try {
    const response = await axiosApi.post(`/companies/create-employee`, data);
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

export default createEmployee;