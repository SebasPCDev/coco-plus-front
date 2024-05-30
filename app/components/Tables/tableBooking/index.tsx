import BookingStatusFunction from '@/app/components/Status/dashboardEmployee/statusBooking';
import {
  ApproveBooking,
  CancelBookingCoworking,
  CheckInCoworking,
} from '../../Buttons/dashboardSuperadmin/buttons';

const BookingList = ({
  bookings,
  coworkId,
}: {
  bookings: any;
  coworkId: string;
}) => {
  return (
    <div className="mt-6 flow-root min-h-[28rem] w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          <div className="xl:hidden ">
            {bookings?.map((booking: any) => (
              <div key={bookings.id} className="mb-2 rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-bold">
                        {booking.user.name} {booking.user.lastname}
                      </p>
                      <BookingStatusFunction status={booking.status} />
                    </div>
                    <div>
                      <p className=" text-gray-500">
                        <strong>Teléfono: </strong>
                        {booking.user.phone}
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 sm:grid-rows-2">
                      <p className=" text-gray-500">
                        <strong>Fecha de Reserva: </strong>
                        {booking.reservationDate.split('T')[0]}
                      </p>
                      <p className=" text-gray-500">
                        Check-in Usuario: {booking.confirmUser ? '✅' : '❌'}
                      </p>
                      <p className=" text-gray-500">
                        <strong>Hora de Reserva: </strong>
                        {booking.reservationTime.slice(0, 5)}
                      </p>
                      <p className=" text-gray-500">
                        Check-in Coworking:
                        {booking.confirmCoworking ? '✅' : '❌'}
                      </p>
                      <p className=" text-gray-500">
                        <strong>Token: </strong>
                        {booking.confirmPhrase || 'No generado'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    {booking.status === 'pending' && (
                      <ApproveBooking
                        bookingId={booking.id}
                        coworkId={coworkId}
                      />
                    )}
                    {booking.status === 'active' ? (
                      <CheckInCoworking
                        id={booking.id}
                        confirmCoworking={booking.confirmCoworking}
                        status={booking.status}
                      />
                    ) : (
                      ''
                    )}
                    {booking.status === 'active' ||
                    booking.status === 'pending' ? (
                      <CancelBookingCoworking
                        id={booking.id}
                        status={booking.status}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-sm text-gray-900 xl:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre Completo
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Fecha Reserva
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Hora Reserva
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
                  Estado de la Reserva
                </th>
              </tr>
            </thead>

            <tbody className="overflow-x-auto bg-white">
              {bookings?.map((booking: any) => (
                <tr
                  key={booking.id}
                  className="w-full border-b  text-center  last-of-type:border-none  hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px] truncate whitespace-nowrap py-1 pl-6 pr-3">
                    {booking.user.name} {booking.user.lastname}
                  </td>

                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.user.phone}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.reservationDate.split('T')[0]}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.reservationTime.slice(0, 5)}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {booking.confirmPhrase}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.confirmUser ? '✅' : '❌'}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  ">
                    {booking.confirmCoworking ? '✅' : '❌'}
                  </td>
                  <td className="flex max-w-[250px] justify-center truncate whitespace-nowrap py-4">
                    <BookingStatusFunction status={booking.status} />
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  pl-6 pr-3">
                    <div className="flex justify-center gap-5 p-1">
                      {booking.status === 'pending' && (
                        <ApproveBooking
                          bookingId={booking.id}
                          coworkId={coworkId}
                        />
                      )}
                      {booking.status === 'active' ? (
                        <CheckInCoworking
                          id={booking.id}
                          confirmCoworking={booking.confirmCoworking}
                          status={booking.status}
                        />
                      ) : (
                        ''
                      )}
                      {booking.status === 'active' ||
                      booking.status === 'pending' ? (
                        <CancelBookingCoworking
                          id={booking.id}
                          status={booking.status}
                        />
                      ) : (
                        ''
                      )}
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
};

export default BookingList;
