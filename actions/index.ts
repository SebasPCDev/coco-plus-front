"use server"

// import redirectionByRole from '@/utils/ redirects/redirectByRole';
// import { redirect } from 'next/navigation';
import PostLogin from '@/utils/posts/postSignin';
import ILoginForm from '@/utils/types/loginFormInterface';

// Todas las funciones ejecutan en el server
// No importa si el componente que invoca este en client o server
// Nos permite acceder a headers, cookies, etc

// Los server actions no retornan un información. Solo ejecutan una función
export const HandleLogin = async (credentials: ILoginForm) => {
  console.log("credentials from server action", credentials);

  // Invocamos al POST que realiza el login y setea la cookie
  const data = await PostLogin(credentials);

  return data;

  // redirect(redirectionByRole(data.user.role))

}




