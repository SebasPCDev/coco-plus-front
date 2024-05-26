export const getForInfoUsers = async (token: string) => {
  try {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${urlBase}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Error al obtener los datos del usuario');
    }

    const data = await response.json();

    return data.users.length;
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    throw error;
  }
};

export default getForInfoUsers;
