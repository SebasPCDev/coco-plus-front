import { axiosApi } from '../api';

const getProfile = async () => {

  try {
    const response = await axiosApi.get('/users/profile');
    return response.data;
  } catch (error) {
    console.log('hay un error', error);
  }
};

export default getProfile;
