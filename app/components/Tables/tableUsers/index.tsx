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

export default function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
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
    <div className="mt-6 flow-root w-full overflow-x-auto">
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
          <table className="hidden min-w-full text-sm text-gray-900 md:table">
            <thead className="rounded-lg text-center font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Apellido
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Email
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Identificación
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Cargo
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Rol
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative  pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-x-auto bg-white">
              {usersData?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b  text-center  last-of-type:border-none  hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px]  truncate whitespace-nowrap pl-3 pr-3 ">
                    <div className="flex items-center justify-center gap-3">
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {user.lastname}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {user.phone}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {user.email}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {user.identification}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {user.position}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {user.role}
                  </td>
                  <td className="whitespace-nowrap  ">
                    <UserStatus status={user.status} />
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  pl-6 pr-3">
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
