'use client';
// Todo.tsx
import UserProfile from '@/app/components/JulianCompany/members/userProfile';
import Header from '@/app/components/JulianCompany/members/header';
import MemberCard from '@/app/components/JulianCompany/members/memberCard';
import { useContext, useEffect, useState } from 'react';
import GetProfile from '@/utils/gets/getProfile';
import { useUserContext } from '../../context';
import GetCompany from '@/utils/gets/getCompany';

const Todo = () => {
  const [employees, setEmployees] = useState([]);
  const { token } = useUserContext();

  useEffect(() => {
    const getData = async () => {
      const profile = await GetProfile({ token });

      const companyId = profile?.employee.company?.id;

      const company = await GetCompany({ companyId, token });

      setEmployees(company.employees);
    };
    getData();
  }, []);


  return (
    
      <div className="w-full">
        <div className="col-span-1 mb-6 flex flex-col items-start md:col-span-2 md:flex-row md:items-center">
          <Header />
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-6 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
          {employees.map((member: any) => (
            <MemberCard
              key={member.id}
              photoUrl="https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg"
              name={member.user.name + ' ' + member.user.lastname}
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
