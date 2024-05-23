export const putDataCoworking = async (
  token: string,
  modifiedData: {},
  id: string,
) => {
  try {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;
    console.log(urlBase);
    const response = await fetch(`${urlBase}/coworkings/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Error al actualizar los datos del coworking',
      );
    }
  } catch (error) {
    console.error('Error al actualizar los datos del coworking:', error);
    throw error;
  }
};

export default putDataCoworking;
