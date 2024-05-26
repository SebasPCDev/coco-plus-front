'use client';
import {
  InactiveUser,
  UpdateUser,
} from '@/app/components/Buttons/dashboardSuperadmin/buttons';
import UserStatus from '@/app/components/Status/dashboardSuperadmin/statusUser';
import getProfileById from '@/utils/api/users/getProfileId';
import IUser from '@/utils/types/userResponseInterface';
import tradRoles, { Role } from '@/utils/types/users/usersRoles';
import { usePathname } from 'next/navigation';
import { use, useEffect, useState } from 'react';

export default function UserDescription() {
  const pathname = usePathname();
  const id = pathname.split('/')[4];

  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const dataUser = async () => {
      const response = await getProfileById(id);
      setUserData(response);
    };
    dataUser();
  }, [id]);

  return (
    <>
      {userData && (
        <div className="container mx-auto p-4">
          <h1 className="mb-4 text-center text-4xl font-bold">
            {userData.name} {userData.lastname}
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* contenedor 1*/}
            <div className="mt-4 max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:mt-0 md:w-full">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className=" col-span-2 rounded-lg border  p-4 shadow-sm md:col-span-1">
                  <h2 className="mb-3 text-center text-xl font-semibold">
                    Información de Contacto
                  </h2>
                  <p>
                    <strong>Teléfono: </strong> {userData.phone}
                  </p>
                  <p>
                    <strong>Correo Electrónico: </strong> {userData.email}
                  </p>
                </div>
                <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
                  <h2 className="mb-3 text-center text-xl font-semibold">
                    Datos Personales
                  </h2>
                  <p>
                    <strong>Identificación: </strong> {userData.identification}
                  </p>
                  <p>
                    <strong>Cargo: </strong> {userData.position}
                  </p>
                </div>
                <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
                  <h2 className="mb-3 text-center text-xl font-semibold">
                    Datos Adicionales
                  </h2>
                  <p>
                    <strong>Rol: </strong> {tradRoles(userData.role)}
                  </p>
                  <p>
                    <strong>Estado: </strong>{' '}
                    <UserStatus status={userData.status} />
                  </p>
                </div>
                <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-3">
                  <h2 className="mb-3 text-center text-xl font-semibold">
                    {userData.role === Role.ADMIN_COWORKING &&
                      'Información de Coworkings'}
                    {userData.role === Role.ADMIN_COMPANY &&
                      'Información de la Empresa'}
                    {userData.role === Role.EMPLOYEE &&
                      'Información de la Empresa'}
                    {userData.role === Role.COWORKING &&
                      'Información del Coworking'}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
