import { MyCoworkingProvider } from './myCoworkingConstext';
import GetProfile from '@/utils/gets/getProfile';
import { cookies } from 'next/headers';
import Link from 'next/link';
import {
  DocumentMinusIcon,
  EyeIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import CoworkingStatus from './statusCoworking.tsx';

export default async function MyCoworkigs() {
  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;
  const profile = await GetProfile({ token });
  const MyCoworkings = profile?.coworkings;

  return (
    <div className="mx-auto">
      <Link href="/dashboard/adminCoworking/myCoworkings/create">
        <button className="left-0 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Add Coworking
        </button>
      </Link>
      <h1 className="mb-10 mt-4 text-center text-4xl">My Coworkings</h1>
      <div className="mt-6 flow-root w-full">
        <div className="inline-block min-w-full align-middle">
          <div className="founded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-center  font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Phone
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Open
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Close
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Address
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Capacity
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Actions
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
                      {coworking.open}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.close}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {coworking.address}
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
