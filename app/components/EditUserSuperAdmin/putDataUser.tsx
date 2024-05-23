export const putDataUser = async (token: string, modifiedData, id: string) => {
  try {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;
    console.log("ID:", id);
    console.log("Datos enviados:", modifiedData);
    const response = await fetch(`${urlBase}/users/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modifiedData),
    });


    console.log("Respuesta del servidor:", response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Error al actualizar los datos del usuario',
      );
    }

    const updatedData = await response.json();
    console.log("Datos actualizados:", updatedData);

    return updatedData;
  } catch (error) {
    console.error('Error al actualizar los datos del empleado:', error);
    throw error;
  }
};

export default putDataUser;
