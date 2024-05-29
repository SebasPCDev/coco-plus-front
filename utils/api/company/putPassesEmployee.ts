import { axiosApi } from '../api';

const putPassesEmployee = async (
  companyId: string,
  userId: string,
  newPasses: number,
) => {
  try {
    console.log('entre');
    const response = await axiosApi.put(
      `/companies/${companyId}/update-employee/${userId}`,
      { passes: newPasses },
    );
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
