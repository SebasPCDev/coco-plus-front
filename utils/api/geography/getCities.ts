import { axiosApi } from '../api';

const getCities = async () => {
  try {
    const response = await axiosApi.get('/cities');
    console.log("response", response);
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

export default getCities;
