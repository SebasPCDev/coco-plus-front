import React from 'react';
import Link from 'next/link';

const OfertaSection: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        Ofrece a tus equipos remotos acceso a
        <span className="text-custom-primary">
          espacios de trabajo flexibles
        </span>
      </h1>
      <p className="mt-8 max-w-4xl text-3xl text-gray-900">
        Una suscripción, miles de escritorios y salas de reuniones. Paga solo
        por lo que usa tu equipo. Sin compromisos.
      </p>
      <div className="flex justify-around md:justify-start mt-12 gap-4">
        <Link href="/formRequest/coworkingsForm">
          <button className="rounded-md bg-custom-fourth px-6 py-4 text-base md:text-2xl font-bold text-white transition ease-in-out hover:scale-105 hover:bg-custom-primary hover:text-custom-fourth">
            Soy Coworking
          </button>
        </Link>
        <Link href="/formRequest/companiesForm">
          <button className="rounded-md bg-custom-fourth px-6 py-4 text-base md:text-2xl font-bold text-white transition ease-in-out hover:scale-105 hover:bg-custom-primary hover:text-custom-fourth">
            Soy Empresa
          </button>
        </Link>
      </div>
    </>
  );
};

export default OfertaSection;
