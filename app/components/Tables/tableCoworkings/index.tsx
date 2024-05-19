import {
  UpdateCoworking,
  InactiveCoworking,
} from '@/app/components/Buttons/dashboardSuperadmin/buttons';
import CoworkingStatus from '@/app/components/Status/dashboardSuperadmin/statusCoworking';
import { cookies } from 'next/headers';

export default async function CoworkingsTable({
  coworkingsData,
}: {
  coworkingsData?: {
    page: number;
    limit: number;
    total: number;
    coworking: [];
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;

  return (
    <div className="mt-6 flow-root h-[35rem] w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {coworkingsData?.coworking?.map((coworking: any) => (
              <div
                key={coworking.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
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
                    <InactiveCoworking id={coworking.id} token={token} />
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
              {coworkingsData?.coworking?.map((coworking: any) => (
                <tr
                  key={coworking.id}
                  className="w-full border-b py-3 text-center last-of-type:border-none hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px] truncate whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center justify-center gap-3">
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
                    <div className="flex justify-center gap-6">
                      <UpdateCoworking id={coworking.id} />
                      <InactiveCoworking id={coworking.id} token={token} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
