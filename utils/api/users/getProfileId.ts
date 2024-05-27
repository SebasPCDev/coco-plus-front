import { axiosApi } from '../api';

const getProfileById = async (id: string) => {
  try {
    const response = await axiosApi.get(`/users/${id}`);
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

export default getProfileById;
