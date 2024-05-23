import IAddEmployeeInfo from "../types/requests/companiesFormAddEmployeeInterface";

const PostCompanyAddEmployee = async (data: IAddEmployeeInfo) => {
  const response = await fetch('/api/company', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al enviar la solicitud');
  }

  return response.json();
};

export default PostCompanyAddEmployee;
