


const InfoUsersAdmins = ({ user }: any) => {
    
    const userAdmin = user
    return (
      <div className="border-t">
        <p>
          <strong>Name:</strong> {userAdmin.name}{' '}
          {userAdmin.lastname}
        </p>
        <p>
          <strong>Phone:</strong> {userAdmin.phone}
        </p>
        <p>
          <strong>identification:</strong> {userAdmin.identification}
        </p>
        <p>
          <strong>position:</strong> {userAdmin.position}
        </p>
        <p>
          <strong>Email:</strong> {userAdmin.email}
        </p>
        <p>
          <strong>Role:</strong> {userAdmin.role}
        </p>
      </div>
    );
};


export default InfoUsersAdmins