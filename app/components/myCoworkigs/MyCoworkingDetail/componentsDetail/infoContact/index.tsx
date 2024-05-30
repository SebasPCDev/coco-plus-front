import CoworkingStatus from '../../../statusCoworking.tsx';

const InfoCoworking = ({ coworking }: any) => {
  return (
    <>
      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Información de Contacto</h2>
        <p>
          <strong>Teléfono:</strong> {coworking.phone}
        </p>
        <p>
          <strong>Correo Electrónico:</strong> {coworking.email}
        </p>
      </div>
      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Dirección</h2>
        <p>{coworking.address}</p>
        <p>
          {coworking.city}, {coworking.state}, {coworking.country}
        </p>
      </div>
      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Horario de Operación</h2>
        <p>
          <strong>Apertura:</strong> {coworking.open}
        </p>
        <p>
          <strong>Cierre:</strong> {coworking.close}
        </p>
      </div>
      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Capacidad y Estado</h2>
        <p>
          <strong>Capacidad:</strong> {coworking.capacity}
        </p>
        <p>
          <strong>Estado:</strong> <CoworkingStatus status={coworking.status} />
        </p>
      </div>
    </>
  );
};

export default InfoCoworking;
