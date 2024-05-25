import CoworkingStatus from '../../myCoworkigs/statusCoworking.tsx';
import { ConfirmBooking } from '../../Buttons/bookings';

const BookingList = ({
  bookings,
  token,
  id,
  fetchData,
}: {
  bookings: any;
  token: string | undefined;
  id: string;
  fetchData: any;
}) => {
  return (
    <div className="mt-6 flow-root min-h-[28rem] w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full  text-sm text-gray-900 md:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre Completo
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
                <th scope="col" className=" py-5 font-medium">
                  token de llegada
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
                      <p>
                        {booking.user.name} {booking.user.lastname}
                      </p>
                    </div>
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
                  <td className="flex  max-w-[250px] justify-center truncate whitespace-nowrap py-1">
                    <CoworkingStatus status={booking.status} />
                    {booking.status === 'pending' ? (
                      <ConfirmBooking
                        idCoworking={id}
                        token={token}
                        idBooking={booking.id}
                        fetchData={fetchData}
                      />
                    ) : null}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.confirmPhrase}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
