'use client';
import Pagination from '../pagination';

import {
  InactiveUser,
  UpdateUser,
} from '../../Buttons/dashboardSuperadmin/buttons';
import { useUserContext } from '../../context';
import { useEffect, useState } from 'react';

import GetUsers from '@/utils/gets/getUsers';
import IUser from '@/utils/types/userResponseInterface';
import Image from 'next/image';
import UserStatus from '../../Status/dashboardSuperadmin/statusUser';

export default function UsersTable() {
  const { token } = useUserContext();

  const [usersData, setUsersData] = useState<IUser[]>([]);

  const getData = async () => {
    const response = await GetUsers({ token });
    if (response) {
      setUsersData(response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-6 flow-root w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          {/* <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className=" text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Apellido
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Identificación
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cargo
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rol
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {usersData?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-center  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap  py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={'/customers/evil-rabbit.png'}
                        className="rounded-full object-contain shadow-md"
                        width={35}
                        height={35}
                        alt={`${user.name}'s profile picture`}
                      />
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.lastname}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{user.phone}</td>
                  <td className="whitespace-nowrap px-3 py-3">{user.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.identification}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.position}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{user.role}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <UserStatus status={user.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={user.id} />
                      <InactiveUser id={user.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalPages={5} />
        </div>
      </div>
    </div>
  );
}
