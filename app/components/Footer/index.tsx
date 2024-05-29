import Image from "next/image";
import CocoLogo from "../Logo/coco-logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="   gradient-footer             text-center text-white/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">

        <div className="flex justify-center">
          <Link href="#" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ffffff"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/></svg>
          </Link>
          <Link href="#" className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
          </Link>
          <Link href="#" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
          </Link>
          <Link href="#" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/></svg>
          </Link>
          <Link href="#" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#ffffff"><path d="M13.02 0v5.55h5.55v4.28h-5.55V16c0 1.39-.02 2.2.13 2.59.14.4.51.8.91 1.03.53.32 1.14.48 1.82.48 1.22 0 2.43-.4 3.63-1.18v3.78c-1.03.48-1.96.82-2.79 1.02-.83.2-1.73.29-2.7.29a7.36 7.36 0 0 1-4.74-1.6c-.6-.51-1-1.06-1.24-1.64a7.08 7.08 0 0 1-.34-2.5V9.82H4.44v-3.4a8.5 8.5 0 0 0 2.7-1.31 6.57 6.57 0 0 0 1.62-2.06c.41-.8.7-1.82.85-3.06H13z"/></svg>
          </Link>
        </div>
      </div>
    
      <div className="mx-6 py-10 text-center md:text-left">
        <div style={{maxWidth: "1400px"}} className="mx-auto grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <Image
              className="w-[10rem] mx-auto"
              src={'/cocoproject/LimaSinFondo.png'}
              alt="cocologo"
              width={250}
              height={250}
            />
            <p>
            Conectamos empresas con espacios de coworking, impulsando un modelo laboral híbrido y mejorando el bienestar de tus colaboradores. 
            </p>
          </div>


          <div className="mx-[5rem]" >
            <h6
              className=" mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Acerca de
            </h6>
            <p className="mb-4">
              <Link href="#!">Nosotros</Link>
            </p>
            <p className="mb-4">
              <Link href="#!">Ayuda</Link>
            </p>
            <p className="mb-4">
              <Link href="#!">Terminos y condiciones</Link>
            </p>
            <p>
              <Link href="#!">Creditos</Link>
            </p>
          </div>

          <div className="mx-[5rem]" >
            <h6
              className=" mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Sobre la app
            </h6>
            <p className="mb-4">
              <Link href="">Version</Link>
            </p>
            <p className="mb-4">
              <Link href="">Desarrolladores</Link>
            </p>
            <p className="mb-4">
              <Link href="">creacion</Link>
            </p>
          </div>

          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contactanos
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">

              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>

              </span>
              Sede de coco+
            </p>

            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">

              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>

              </span>
              cocoplus2024@gmail.com
            </p>

            <p className="flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">

              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>

              </span>
              + 54 9 111 111-1111
            </p>
          </div>
        </div>
      </div>
    
      <div className="bg-[#1d2c1b] p-6 text-center">
        <span>© Copyright 2024 | Todos los derechos reservados</span>
        <span className="font-semibold"
          >COCO +
        </span>
      </div>
    </footer>
  );
};

export default Footer;
