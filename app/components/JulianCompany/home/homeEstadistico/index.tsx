"use client";

import React, { useContext, useEffect, useState } from 'react';
import StatisticCard from './circuloestadistico';
import { useUserContext } from '@/app/components/context';
import GetProfile from '@/utils/gets/getProfile';
import GetCompany from '@/utils/gets/getCompany';
import MemberCard from '../../members/memberCard';


const Home: React.FC = () => {
  const [employees, setEmployees] = useState([]);
  const [passesAvailable, setPassesAvailable] = useState(0);
  const { token } = useUserContext();

  useEffect(() => {
    const getData = async () => {
      const profile = await GetProfile({ token });

      const companyId = profile?.employee.company?.id;

      const company = await GetCompany({ companyId, token });

      setEmployees(company.employees);

      const totalPassesAvailable = company.employees.reduce((total: number, employee: any) => total + employee.passesAvailable, 0);
      setPassesAvailable(totalPassesAvailable);
      
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-content items-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Home</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        <StatisticCard
          image="/images/hot-desks.jpg"
          title="Beneficiarios"
          description={`Cantidad de empleados beneficiados: ${employees.length}`}
          number={employees.length}
          percentage={75}
        />
        <StatisticCard
          image="/images/meeting-rooms.jpg"
          title="Pases disponibles"
          description={`Cantidad de pases disponibles:`}
          number={300}
          percentage={60}
        />
        <StatisticCard
          image="/images/private-offices.jpg"
          title="Pases asignados"
          description={`Cantidad de pases asignados: ${passesAvailable}`}
          number={passesAvailable}
          percentage={70}
        />
        <StatisticCard
          image="/images/event-spaces.jpg"
          title="Pases consumidos"
          description={`Cantidad de pases consumidos: ${passesAvailable}`}
          number={passesAvailable}
          percentage={80}
        />
      </div>
    </div>
  );
};

export default Home;
