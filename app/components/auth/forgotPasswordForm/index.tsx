"use client"
import Link from 'next/link';
import useForgotPassForm from './useForgotPassForm';

const ForgotPassForm = () => {
  const { email, emailError, handleChange, handleSubmit } = useForgotPassForm();
  return (
    <div className="relative h-screen w-full bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
      <div className="flex justify-center items-center h-full w-full md:w-1/2">
        <form
          noValidate
          className="flex flex-col gap-4 rounded-2xl bg-custom-white mx-10 md:ml-12 px-8 pb-8 pt-6 shadow-lg max-w-[400px] w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="m-6 text-center text-2xl font-bold text-gray-800">
            Recuperar contraseña
          </h1>

          <p className="mb-4">
            Ingresa la dirección de correo electrónico. Te enviaremos un email para cambiar la contraseña.
          </p>

          <div className="mb-4 flex flex-col gap-4">
            <label className="label-form" htmlFor={email}>
              Email
            </label>
            <div className="relative flex items-center justify-center gap-2 rounded-lg border-2 bg-custom-white">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                onChange={handleChange}
                value={email}
              />
            </div>
            <p className="input-error">
              {emailError}
            </p>
          </div>

          <Link href='/login' className='ml-auto underline'>
            Iniciar sesión
          </Link>
          <button
            className="btn btn-confirm"
            type="submit"
          >
            Enviar email
          </button>
        </form>
      </div>
    </div>
  )
}
export default ForgotPassForm