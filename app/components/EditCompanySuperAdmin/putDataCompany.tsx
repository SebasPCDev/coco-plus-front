export const putDataCompany = async (
  token: string,
  modifiedData: any,
  id: string,
) => {
  try {
    const urlBase = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${urlBase}/companies/${id}`, {
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
        errorData.message || 'Error al actualizar los datos de la compañia',
      );
    }

    const updatedData = await response.json();

    return updatedData;
  } catch (error) {
    console.error('Error al actualizar los datos de la compañia:', error);
    throw error;
  }
};

export default putDataCompany;
