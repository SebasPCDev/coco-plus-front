export const putDataUser = async (token: string, modifiedData, id: string) => {
  try {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${urlBase}/users/${id}`, {
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
        errorData.message || 'Error al actualizar los datos del usuario',
      );
    }

    const updatedData = await response.json();

    return updatedData;
  } catch (error) {
    console.error('Error al actualizar los datos del empleado:', error);
    throw error;
  }
};

export default putDataUser;
