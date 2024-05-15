import axios from "axios";
import { cookies } from 'next/headers';

import ILoginForm from "../types/loginFormInterface";
const urlBase = process.env.NEXT_PUBLIC_API_URL;

const PostLogin = async (data: ILoginForm) => {
  const url = `${urlBase}/auth/signin`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // cookiesStore -> naiming: convención que se utiliza en next
    // seteamos la cookie
    const cookiesStore = cookies();
    const token = response.data.token;
    if (token) {
      cookiesStore.set("token", token, {
        path: "/",
        // expires:
        httpOnly: true,
        sameSite: 'none'
      })
    }

    return response.data;
  } catch (error: any) {
    return { error: error.message || "error desconcido" };
  }
};

export default PostLogin;
