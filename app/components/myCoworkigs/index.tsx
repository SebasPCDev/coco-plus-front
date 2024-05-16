import GetProfile from '@/utils/gets/getProfile';
import { cookies } from 'next/headers';

export default async function MyCoworkigs() {
  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;
  const profile = await GetProfile({ token });
  const MyCoworkings = profile?.coworkings;

  return (
    <div className="mx-auto">
      <h1 className="mb-10 mt-4 text-center text-4xl">My Coworkings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Open</th>
              <th className="border px-4 py-2">Close</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Capacity</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MyCoworkings.map((coworking) => (
              <tr key={coworking.id}>
                <td className="border px-4 py-2">{coworking.name}</td>
                <td className="border px-4 py-2">{coworking.phone}</td>
                <td className="border px-4 py-2">{coworking.email}</td>
                <td className="border px-4 py-2">{coworking.open}</td>
                <td className="border px-4 py-2">{coworking.close}</td>
                <td className="border px-4 py-2">{coworking.address}</td>
                <td className="border px-4 py-2">{coworking.capacity}</td>
                <td className="border px-4 py-2">{coworking.status}</td>
                <td className="border px-4 py-2">
                <div className="flex">
                  <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                    Show
                  </button>
                </div>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
