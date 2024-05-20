"use client";
// Todo.tsx
import UserProfile from '@/app/components/JulianCompany/members/userProfile';
import Header from '@/app/components/JulianCompany/members/header';
import MemberCard from '@/app/components/JulianCompany/members/memberCard';
import { useEffect, useState } from 'react';
import GetProfile from '@/utils/gets/getProfile';
import { useUserContext } from '../../context';
import GetCompany from '@/utils/gets/getCompany';

const Todo = () => {
  const [employees, setEmployees] = useState([]);
  const { token } = useUserContext();
  console.log("members");
  useEffect(() => {
    console.log("getData");
    const getData = async () => {
      const profile = await GetProfile({token});
      console.log("profile", profile);
      const companyId = profile?.employee.company?.id;
      console.log("companyId", companyId);
      const company = await GetCompany({companyId, token});
      console.log("company", company);
      setEmployees(company.employees);      
    }
    getData();     
  }, []);
  // Datos de los miembros
  /* const members = [
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
  ]; */

  return (
    <div className="w-full">
      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-start md:items-center mb-6">
        <Header />
      </div>
      <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((member: any) => (
          <MemberCard
            key={member.id}
            photoUrl="https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg"
            name={member.user.name + " " + member.user.lastname}
            identification={member.user.identification}
            email={member.user.email}
            role={member.user.role}
            passes={member.passes}
            passesAvailable={member.passesAvailable}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;