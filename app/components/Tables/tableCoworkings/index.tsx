import Image from 'next/image';
import {
  UpdateCoworking,
  DeleteCoworking,
} from '@/app/components/Buttons/dashboardSuperadmin/buttons';

import GetCoworkings from '@/utils/gets/getCoworkings';
import Pagination from '../pagination';
import CoworkingStatus from '@/app/components/Status/dashboardSuperadmin/statusCoworking';

export default async function CoworkingsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const coworkingsData = await GetCoworkings();
  console.log(coworkingsData);

  return (
    <div className="mt-6 flow-root w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg overflow relative bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {coworkingsData.coworking?.map((coworking) => (
              <div
                key={coworking.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={coworking.thumbnail}
                        className="mr-2 rounded-full"
                        width={60}
                        height={60}
                        alt={`${coworking.name}'s profile picture`}
                      />
                      <p className="font-bold">{coworking.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-20 px-1">
                      <p className=" text-gray-500">{coworking.email}</p>
                      <p className=" text-gray-500">{coworking.phone}</p>
                      <p className=" text-gray-500">{coworking.country}</p>
                      <p className=" text-gray-500">{coworking.state}</p>
                      <p className=" text-gray-500">{coworking.city}</p>
                      <p className=" text-gray-500">{coworking.capacity}</p>
                    </div>
                  </div>
                  <CoworkingStatus status={coworking.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateCoworking id={coworking.id} />
                    <DeleteCoworking id={coworking.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full  text-gray-900 md:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  País
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Provincia
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ciudad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Capacidad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto bg-white">
              {coworkingsData.coworking?.map((coworking) => (
                <tr
                  key={coworking.id}
                  className="w-full border-b py-3 text-center  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px]  truncate whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={coworking.thumbnail || '/images/placeholder.jpg'}
                        className="rounded-full"
                        width={60}
                        height={60}
                        alt={`${coworking.name}'s profile picture`}
                      />
                      <p>{coworking.name}</p>
                    </div>
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    {coworking.email}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    {coworking.phone}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    {coworking.country || ''}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    {coworking.state || ''}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    {coworking.city || ''}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    {coworking.capacity}
                  </td>

                  <td className="max-w-[150px] truncate whitespace-nowrap px-3 py-3">
                    <CoworkingStatus status={coworking.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCoworking id={coworking.id} />
                      <DeleteCoworking id={coworking.id} />
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
