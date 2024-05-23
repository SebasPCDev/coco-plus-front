import forgotPassword from '@/utils/api/auth/forgotPassword';
import { useState } from 'react'

const useForgotPassForm = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setEmailError("El email es requerido");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("El email es inválido");
      return;
    }

    const response = await forgotPassword(email)
    console.log("response", response);
  }
  
  return {email, emailError, handleChange, handleSubmit}
}

export default useForgotPassForm