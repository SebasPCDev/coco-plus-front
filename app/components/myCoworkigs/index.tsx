import GetProfile from '@/utils/gets/getProfile';
import { cookies } from 'next/headers';
import Link from 'next/link';
import {
  ClipboardDocumentListIcon,
  EyeIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import CoworkingStatus from './statusCoworking.tsx';

export default async function MyCoworkigs() {
  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;
  const profile = await GetProfile({ token });
  const MyCoworkings = profile?.coworkings;

  return (
    <div className="mx-auto">
      <div className="my-4 flex justify-between">
        <div className="flex items-center">
          <ClipboardDocumentListIcon className="w-14" />
          <h1 className="text-3xl font-bold">Lista de Coworkings</h1>
        </div>
        <Link href="/dashboard/adminCoworking/myCoworkings/create">
          <button className=" btn btn-confirm">Añadir Coworking</button>
        </Link>
      </div>
      <div className="mt-6 flow-root w-full">
        <div className="inline-block min-w-full align-middle">
          <div className="founded-lg bg-gray-50 p-2 md:pt-0">
            <div className="xl:hidden ">
              {MyCoworkings?.map((coworking: any) => (
                <div
                  key={coworking.id}
                  className="mb-2 rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="w-full">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-bold">{coworking.name}</p>
                        <CoworkingStatus status={coworking.status} />
                      </div>
                      <div>
                        <p className=" text-gray-500">{coworking.email}</p>
                      </div>
                      <div className="grid sm:grid-cols-2 sm:grid-rows-2">
                        <p className=" text-gray-500">
                          <strong>Hora de apertura: </strong>
                          {coworking.open.slice(0, 5)}
                        </p>
                        <p className="text-gray-500">
                          <strong>Capacidad: </strong>
                          {coworking.capacity}
                        </p>
                        <p className=" text-gray-500">
                          <strong>Hora de Cierre: </strong>
                          {coworking.close.slice(0, 5)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={
                          '/dashboard/adminCoworking/myCoworkings/edit/' +
                          coworking.id
                        }
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <PencilIcon className="w-8" />
                      </Link>
                      <Link
                        href={
                          '/dashboard/adminCoworking/myCoworkings/' +
                          coworking.id
                        }
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <EyeIcon className="w-8" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 xl:table">
              <thead className="rounded-lg text-center font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Nombre
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Teléfono
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Correo Electrónico
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Apertura
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Cierre
                  </th>

                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Capacidad
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Estado
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {MyCoworkings.map((coworking) => (
                  <tr
                    key={coworking.id}
                    className="w-full border-b py-3 text-center  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.phone}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.open.slice(0, 5)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.close.slice(0, 5)}
                    </td>

                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.capacity}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <CoworkingStatus status={coworking.status} />
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <div className="flex gap-4">
                        <Link
                          href={
                            '/dashboard/adminCoworking/myCoworkings/edit/' +
                            coworking.id
                          }
                          className="rounded-md border p-2 hover:bg-gray-100"
                        >
                          <PencilIcon className="w-8" />
                        </Link>
                        <Link
                          href={
                            '/dashboard/adminCoworking/myCoworkings/' +
                            coworking.id
                          }
                          className="rounded-md border p-2 hover:bg-gray-100"
                        >
                          <EyeIcon className="w-8" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
