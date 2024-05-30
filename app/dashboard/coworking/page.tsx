import StatisticCard from '@/app/components/JulianCompany/home/homeEstadistico/circuloestadistico';
import getBookingsById from '@/utils/api/coworkings/getBookingsById';
import getProfile from '@/utils/api/users/getProfile';

const homeReceptionists = async () => {
  const user = await getProfile();
  const bookings = await getBookingsById(user.coworkings[0].id);

  const bookingsComplete = bookings.bookings.filter(
    (booking: any) => booking.status === 'completed',
  );

  const bookingsCanceled = bookings.bookings.filter(
    (booking: any) =>
      booking.status === 'user_canceled' ||
      booking.status === 'coworking_canceled',
  );

  return (
    <div className="justify-content flex flex-col items-center p-8">
      <header className="mb-8 text-center"></header>

      <div className="flex w-full max-w-6xl flex-wrap justify-center gap-8">
        <StatisticCard
          image="/images/hot-desks.jpg"
          title="Reservas totales"
          description={`Cantidad de reservas totales: `}
          number={bookings.bookings.length}
          percentage={100}
        />
        <StatisticCard
          image="/images/meeting-rooms.jpg"
          title="Reservas Efectivas "
          description={`Cantidad de reservas efectivas:`}
          number={bookingsComplete.length}
          percentage={
            isNaN(
              Math.floor(
                (bookingsComplete.length * 100) / bookings.bookings.length,
              ),
            )
              ? 0
              : Math.floor(
                  (bookingsComplete.length * 100) / bookings.bookings.length,
                )
          }
        />
        <StatisticCard
          image="/images/private-offices.jpg"
          title="Reservas Canceladas"
          description={`Cantidad de reservas canceladas:`}
          number={bookingsComplete.length}
          percentage={
            isNaN(
              Math.floor(
                (bookingsCanceled.length * 100) / bookings.bookings.length,
              ),
            )
              ? 0
              : Math.floor(
                  (bookingsCanceled.length * 100) / bookings.bookings.length,
                )
          }
        />
      </div>
    </div>
  );
};

export default homeReceptionists;
