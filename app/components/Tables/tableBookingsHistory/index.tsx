import getProfile from '@/utils/api/users/getProfile';
import BookingStatusFunction from '../../Status/dashboardEmployee/statusBooking';
import {
  CheckInEmployee,
  InactiveUser,
  UpdateUser,
  UserDescription,
} from '../../Buttons/dashboardSuperadmin/buttons';

export default async function BookingsHistory() {
  const currentUser = await getProfile();
  console.log(currentUser.bookings);
  return (
    <div className="mt-6 flow-root w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          {/*         <div className="md:hidden ">
          {currentUser?.bookings?.map((booking: any) => (
            <div key={currentUser.bookings.id} className="mb-2 rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="w-full">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-bold">
                      {user.name} {user.lastname}
                    </p>
                    <UserStatus status={user.status} />
                  </div>
                  <div>
                    <p className=" text-gray-500">{user.email}</p>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2">
                    <p className=" text-gray-500">{user.position}</p>
                    <p className=" text-gray-500">{tradRoles(user.role)}</p>
                    <p className=" row-start-2 text-gray-500">{user.phone}</p>
                    <p className=" row-start-2 text-gray-500">
                      {user.identification}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div className="flex justify-end gap-2">
                  <UpdateUser id={user.id} />
                  <InactiveUser id={user.id} />
                </div>
              </div>
            </div>
          ))}
        </div> */}
          <table className="hidden min-w-full text-sm text-gray-900 md:table">
            <thead className="rounded-lg text-center font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Fecha de Reserva
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Hora de Reserva
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Token
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Check-in Usuario
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Check-in Coworking
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Estado de Reserva
                </th>
                <th scope="col" className="relative  pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-x-auto bg-white">
              {currentUser?.bookings?.map((booking: any) => (
                <tr
                  key={booking.id}
                  className="w-full border-b  text-center  last-of-type:border-none  hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.reservationDate.split('T')[0]}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.reservationTime.slice(0, 5)}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.confirmPhrase}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.confirmUser ? '✅' : '❌'}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.confirmCoworking ? '✅' : '❌'}
                  </td>
                  <td className="whitespace-nowrap  ">
                    <BookingStatusFunction status={booking.status} />
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  pl-6 pr-3">
                    <div className="flex justify-center gap-5 p-1">
                      <CheckInEmployee id={booking.id} />
                      <UpdateUser id={booking.id} />
                      <InactiveUser id={booking.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Pagination totalPages={5} /> */}
        </div>
      </div>
    </div>
  );
}
