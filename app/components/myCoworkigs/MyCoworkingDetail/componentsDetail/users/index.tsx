const InfoUsersAdmins = ({ user }: any) => {
  const userAdmin = user;
  return (
    <div className="border-t">
      <p>
        <strong>Nombre:</strong> {userAdmin.name} {userAdmin.lastname}
      </p>
      <p>
        <strong>Teléfono:</strong> {userAdmin.phone}
      </p>
      <p>
        <strong>Identificación:</strong> {userAdmin.identification}
      </p>
      <p>
        <strong>Posición:</strong> {userAdmin.position}
      </p>
      <p>
        <strong>Correo Electrónico:</strong> {userAdmin.email}
      </p>
      <p>
        <strong>Rol:</strong> {userAdmin.role}
      </p>
    </div>
  );
};

export default InfoUsersAdmins;
