export const getForInfoCompanies = async (token: string) => {
    try {
      const urlBase = process.env.NEXT_PUBLIC_API_URL;
  
      const response = await fetch(`${urlBase}/companies/all`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos de las empresas');
      }
  
      const data = await response.json();
      
      const total = data.length;
      const activeCount = data.filter((company: any) => company.status === 'active').length;
      const activePercentage = (activeCount / total) * 100;
      return Math.round(activePercentage);
    } catch (error) {
      console.error('Error al obtener los datos de las empresas:', error);
      throw error;
    }
  };
  
  export default getForInfoCompanies;
  