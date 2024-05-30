'use client';
import React, { useEffect, useState } from 'react';
import StatisticCard from './circuloestadistico';
import { useUserContext } from '@/app/components/context';
import GetProfile from '@/utils/gets/getProfile';
import GetCompany from '@/utils/gets/getCompany';

const Home: React.FC = () => {
  const [employees, setEmployees] = useState([]);
  const [passesAvailable, setPassesAvailable] = useState(0);
  const [passes, setPasses] = useState(0);
  const [passesCosumed, setPassesCosumed] = useState(0);
  const { token } = useUserContext();
  const [company, setCompany] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const profile = await GetProfile({ token });
      const companyId = profile?.employee.company?.id;
      const company = await GetCompany({ companyId, token });
      setCompany(company);
      setEmployees(company.employees);
      const totalPassesAvailable = company.employees.reduce(
        (total: number, employee: any) => total + employee.passesAvailable,
        0,
      );
      const totalPasses = company.employees.reduce(
        (total: number, employee: any) => total + employee.passes,
        0,
      );

      const totalPassesCosumed = company.employees.reduce(
        (total: number, employee: any) =>
          total + (employee.passes - employee.passesAvailable),
        0,
      );
      setPassesAvailable(totalPassesAvailable);
      setPasses(company.totalPasses);
      setPassesCosumed(totalPassesCosumed);
    };
    getData();
  }, []);

  return (
    <div className="justify-content flex flex-col items-center p-8">
      <header className="mb-8 text-center"></header>

      <div className="flex w-full max-w-6xl flex-wrap justify-center gap-8">
        <StatisticCard
          image="/images/hot-desks.jpg"
          title="Beneficiarios"
          description={`Cantidad de empleados beneficiados: `}
          number={employees.length}
          percentage={(employees.length * 100) / company.quantityBeneficiaries}
        />
        <StatisticCard
          image="/images/meeting-rooms.jpg"
          title="Total de pases "
          description={`Cantidad de pases asignados a la empresa:`}
          number={passes}
          percentage={100}
        />
        <StatisticCard
          image="/images/private-offices.jpg"
          title="Pases asignados"
          description={`Cantidad de pases asignados a empleados:`}
          number={passesAvailable}
          percentage={
            isNaN(Math.floor((passesAvailable * 100) / passes))
              ? 0
              : Math.floor((passesAvailable * 100) / passes)
          }
        />
        <StatisticCard
          image="/images/event-spaces.jpg"
          title="Total pases usados"
          description={`Cantidad de pases consumidos:`}
          number={passesCosumed}
          percentage={
            isNaN(Math.floor((passesCosumed * 100) / passesAvailable))
              ? 0
              : Math.floor((passesCosumed * 100) / passesAvailable)
          }
        />
      </div>
    </div>
  );
};

export default Home;
