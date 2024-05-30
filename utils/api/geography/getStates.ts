import { axiosApi } from '../api';

const getStates = async () => {
  try {
    console.log("STATES");
    const response = await axiosApi.get('/states');
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

export default getStates;
