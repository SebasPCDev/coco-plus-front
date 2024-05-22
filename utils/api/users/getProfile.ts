import { axiosApi } from '../api';

const getProfile = async () => {

  try {
    const response = await axiosApi.get('/users/profile');
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

export default getProfile;
