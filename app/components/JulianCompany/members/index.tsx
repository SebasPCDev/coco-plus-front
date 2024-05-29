'use client';

import Header from '@/app/components/JulianCompany/members/header';
import MemberCard from '@/app/components/JulianCompany/members/memberCard';
import { useEffect, useState } from 'react';
import GetProfile from '@/utils/gets/getProfile';
import { useUserContext } from '../../context';
import GetCompany from '@/utils/gets/getCompany';

const Todo = () => {
  const [employees, setEmployees] = useState([]);
  const [companyId, setCompanyId] = useState('');
  const [totalBenefits, setTotalBenefits] = useState(0);
  const { token } = useUserContext();

  useEffect(() => {
    const getData = async () => {
      const profile = await GetProfile({ token });
      const companyId = profile?.employee.company?.id;
      const company = await GetCompany({ companyId, token });

      setEmployees(company.employees);
      setCompanyId(companyId);
      setTotalBenefits(profile.employee.company.quantityBeneficiaries);
    };
    getData();
  }, []);

  return (
    <div className="w-full">
      <div className="col-span-1 mb-6 flex flex-col items-start md:col-span-2 md:flex-row md:items-center">
        <Header
          quantityBeneficiaries={totalBenefits}
          totalEmployees={employees.length - 1}
        />
      </div>
      <div className="col-span-1 grid grid-cols-1 gap-6 md:col-span-3 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((member: any) => (
          <MemberCard
            key={member.id}
            userId={member.user.id}
            companyId={companyId}
            photoUrl="https://cdn.vectorstock.com/i/2000v/15/78/male-avatar-profile-picture-green-earth-volunteer-vector-5351578.avifile.jpg"
            name={member.user.name + ' ' + member.user.lastname}
            identification={member.user.identification}
            email={member.user.email}
            role={member.user.role}
            passes={member.passes}
            passesAvailable={member.passesAvailable}
            status={member.user.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
