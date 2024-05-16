// Todo.tsx
import Breadcrumb from '@/app/components/JulianCompany/breadCrumb';
import UserProfile from '@/app/components/JulianCompany/userProfile';
import Header from '@/app/components/JulianCompany/header';
import MemberCard from '@/app/components/JulianCompany/memberCard';

const Todo = () => {
  // Datos de los miembros
  const members = [
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Empleado" as const,
      totalBookings: 12,
      monthlyTokenLimit: 500
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    },
    {
      photoUrl: "https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Empleado" as const,
      totalBookings: 8,
      monthlyTokenLimit: 300
    }
    // Agrega más miembros según sea necesario
  ];

  return (
    <div className="w-full">
      {/* UserProfile y Breadcrumb */}
      {/* <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-start md:items-center mb-6">
        <UserProfile photoUrl="/property-1.jpg" name="Nombre del usuario" />
        <Breadcrumb />
      </div> */}
      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-start md:items-center mb-6">
        <Header />
      </div>

      {/* MemberCards */}
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            photoUrl={member.photoUrl}
            name={member.name}
            email={member.email}
            role={member.role}
            totalBookings={member.totalBookings}
            monthlyTokenLimit={member.monthlyTokenLimit}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;