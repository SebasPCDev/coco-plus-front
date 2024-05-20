import axios from "axios";
import ICompaniesInfo from "../types/requests/companiesFormInterface";
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PostCreateEmployee = async (data: any, token: string) => {
  const url = `${urlBase}/companies/create-employee`;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${token}`
    },
  });

  console.log(response.data);
  return response.data;
};

export default PostCreateEmployee;
