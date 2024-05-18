import axios from "axios";
import ICompaniesInfo from "../types/requests/companiesFormInterface";
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PostCompany = async (data: ICompaniesInfo) => {
  const url = `${urlBase}/requests/company`;
  const datasend = {
    ...data,
    quantityBeneficiaries: Number(data.quantityBeneficiaries),
  };
  const response = await axios.post(url, datasend, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export default PostCompany;
