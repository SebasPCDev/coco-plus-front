import React from 'react';
import Link from 'next/link';

const OfertaSection: React.FC = () => {
  return (
    <div
      style={{
        padding: '1rem',
        maxWidth: '800px',
        marginInline: 'auto',
        marginLeft: '20rem',
      }}
    >
      <h1 className="mb-8 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
        Ofrece a tus equipos remotos acceso a{' '}
        <span className="text-custom-primary">
          espacios de trabajo flexibles
        </span>
      </h1>
      <p className="mb-8 max-w-4xl text-4xl text-gray-900">
        Una suscripción, miles de escritorios y salas de reuniones. Paga solo
        por lo que usa tu equipo. Sin compromisos.
      </p>
      <div className="flex justify-end space-x-4">
        <Link href="/formRequest/coworkingsForm">
          <button className=" delay-250 rounded-md bg-custom-fourth px-8 py-4 text-2xl font-bold text-white transition ease-in-out hover:scale-105 hover:bg-custom-primary">
            Soy Coworking
          </button>
        </Link>
        <Link href="/formRequest/companiesForm">
          <button className="delay-250 rounded-md bg-custom-fourth px-8 py-4 text-2xl font-bold text-white transition ease-in-out hover:scale-105 hover:bg-custom-primary">
            Soy Empresa
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfertaSection;
