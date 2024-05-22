import GetBookingsById from '@/utils/gets/getBookingsByID';
import GetProfile from '@/utils/gets/getProfile';
import { cookies } from 'next/headers';
import CoworkingStatus from '../myCoworkigs/statusCoworking.tsx';
import {
  ChangeStatus,
  UpdateCoworking,
} from '../Buttons/dashboardSuperadmin/buttons';

export default async function BookingList() {
  const cookie = cookies();
  const token = cookie.get('token')?.value;

  const user = await GetProfile({ token });
  console.log(user);
  console.log(user.coworkings[0].id); //PENDIENTE

  const bookings = await GetBookingsById({ token, id: user.coworkings[0].id });

  console.log(bookings);

  //const bookings = await GetBookingsById();

  return (
    <div className="mt-6 flow-root min-h-[28rem] w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          {/* <div className="md:hidden">
            {bookings?.bookings?.map((booking: any) => (
              <div
                key={booking.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="font-bold">{booking.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-20 px-1">
                      <p className=" text-gray-500">{booking.email}</p>
                      <p className=" text-gray-500">{booking.phone}</p>
                      <p className=" text-gray-500">{booking.country}</p>
                      <p className=" text-gray-500">{booking.state}</p>
                      <p className=" text-gray-500">{booking.city}</p>
                      <p className=" text-gray-500">{booking.capacity}</p>
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
          </div> */}
          <table className="hidden min-w-full  text-sm text-gray-900 md:table">
            <thead className="rounded-lg text-center  font-normal">
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
                  Correo
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Fecha Reserva
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Hora Reserva
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Estado
                </th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto bg-white">
              {bookings?.bookings?.map((booking: any) => (
                <tr
                  key={booking.id}
                  className="w-full border-b py-1 text-center last-of-type:border-none hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px] truncate whitespace-nowrap py-1 pl-6 pr-3">
                    <div className="flex items-center justify-center gap-3">
                      <p>{booking.user.name}</p>
                    </div>
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.user.lastname}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.user.phone}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.user.email}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.reservationDate.split('T')[0]}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.reservationTime}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    <CoworkingStatus status={booking.status} />{' '}
                    {/* PENDIENTE */}
                  </td>
                  <td className="whitespace-nowrap py-1 pl-6 pr-3">
                    {/*  <div className="flex justify-center gap-6">
                      <UpdateCoworking id={booking.id} />
                      <ChangeStatus
                        id={booking.id}
                        token={token}
                        currentStatus={booking.status}
                      />
                    </div> */}
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
