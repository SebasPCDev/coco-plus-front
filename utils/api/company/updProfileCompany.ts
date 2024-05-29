import { ICompanyProfileUpdDto } from '@/utils/types/companies/companyProfileInterface';
import { axiosApi } from '../api';

const updProfileCompany = async (
  id: string,
  changes: ICompanyProfileUpdDto,
) => {
  changes.quantityBeneficiaries = Number(changes.quantityBeneficiaries);

  try {
    const response = await axiosApi.put(`/companies/${id}`, changes);
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

export default updProfileCompany;
