import { UpdateCoworking, InactiveCoworking, ChangeStatus, } from '@/app/components/Buttons/dashboardSuperadmin/buttons';
import CoworkingStatus from '@/app/components/Status/dashboardSuperadmin/statusCoworking';
import styles from "./tableCoworkings.module.css"
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
    <div className="mt-6 flow-root min-h-[28rem] w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">


          <div className="md:hidden">
            {coworkingsData?.coworking?.map((coworking: any) => (
              <div
                key={coworking.id}
                className={styles.gralContainer}
              >
                <div className={styles.titleAndContItemsContainer}>
                  
                    <div className="mb-2 flex items-center">
                      <p className="font-bold">{coworking.name}</p>
                    </div>
                    <div className={styles.itemsContainerAndStatus}>
                      <div className={styles.itemResponsiveTableContainer}>
                        <div className={styles.itemFlexTableContainer}>
                          <p className=" text-gray-700"><b>Email: <br/></b>{coworking.email}</p>
                          <p className=" text-gray-700"><b>Telefono: <br/></b>{coworking.phone}</p>
                        </div>
                        <div className={styles.itemFlexTableContainer}>
                          <p className=" text-gray-700"><b>Pais: <br/></b>{coworking.country}</p>
                          <p className=" text-gray-700"><b>Estado: <br/></b>{coworking.state}</p>
                        </div>
                        <div className={styles.itemFlexTableContainer}>
                          <p className=" text-gray-700"><b>Ciudad: <br/></b>{coworking.city}</p>
                          <p className=" text-gray-700"><b>Capacidad: <br/></b>{coworking.capacity}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusContainer}>
                      <CoworkingStatus status={coworking.status} />
                    </div>
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
          <table className="hidden min-w-full  text-sm text-gray-900 md:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Email
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className=" py-5 font-medium">
                  País
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Provincia
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Ciudad
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Capacidad
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-1 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto bg-white">
              {coworkingsData?.coworking?.map((coworking: any) => (
                <tr
                  key={coworking.id}
                  className="w-full border-b py-1 text-center last-of-type:border-none hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px] truncate whitespace-nowrap py-1 pl-6 pr-3">
                    <div className="flex items-center justify-center gap-3">
                      <p>{coworking.name}</p>
                    </div>
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {coworking.email}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {coworking.phone}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {coworking.country || ''}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {coworking.state || ''}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {coworking.city || ''}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {coworking.capacity}
                  </td>

                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    <CoworkingStatus status={coworking.status} />
                  </td>
                  <td className="whitespace-nowrap py-1 pl-6 pr-3">
                    <div className="flex justify-center gap-6">
                      <UpdateCoworking id={coworking.id} />
                      <ChangeStatus
                        id={coworking.id}
                        token={token}
                        currentStatus={coworking.status}
                      />
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
