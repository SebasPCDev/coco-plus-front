const index = ({ searchParams }: { searchParams: { token: string } }) => {
  const token = searchParams.token;

  console.log("Token", token);
  return (
    <div className="relative h-screen w-full bg-[url('../../public/LoginMobile.png')] bg-cover bg-center md:bg-[url('../../public/FondoLoginCoco1.png')]">
      <div className="flex justify-center items-center h-full w-full md:w-1/2">
        <form
          noValidate
          className="flex flex-col gap-4 rounded-2xl bg-custom-white mx-10 md:ml-12 px-8 pb-8 pt-6 shadow-lg max-w-[400px] w-full"
        >
          {/* onSubmit={handleSubmit} */}
          <h1 className="m-6 text-center text-2xl font-bold text-gray-800">
            Recuperar contraseña
          </h1>

        </form>
      </div>
    </div>
  )
}
export default index
