import axios from 'axios';
import INewUserForm from '../types/newUserReceptCoworkingPost';
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PostNewUserReceptCoworking = async ({
  newUserForm,
  token,
}: {
  newUserForm: INewUserForm;
  token: string | undefined;
}) => {
  const url = `${urlBase}/coworkings/create-user-coworking`;

  try {
    const response = await axios.post(url, newUserForm, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al activar el coworking:', error);
  }
};

export default PostNewUserReceptCoworking;
