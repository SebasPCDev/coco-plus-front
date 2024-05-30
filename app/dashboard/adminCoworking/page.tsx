import StatisticCard from '@/app/components/JulianCompany/home/homeEstadistico/circuloestadistico';
import getProfile from '@/utils/api/users/getProfile';

export default async function Page() {
  const user = await getProfile();
  console.log(user);

  const activeCoworkings = user.coworkings.filter(
    (coworking: any) => coworking.status === 'active',
  );
  console.log(user.bookings.length);
  return (
    <div className="justify-content flex flex-col items-center p-8">
      <header className="mb-8 text-center"></header>

      <div className="flex w-full max-w-6xl flex-wrap justify-center gap-8">
        <StatisticCard
          image="/images/hot-desks.jpg"
          title="Coworkings"
          description={`Cantidad de coworkings registrados: `}
          number={user.coworkings.length}
          percentage={100}
        />
        <StatisticCard
          image="/images/meeting-rooms.jpg"
          title="Coworkings Activos"
          description={`Cantidad de coworkings activos:`}
          number={activeCoworkings.length}
          percentage={(activeCoworkings.length * 100) / user.coworkings.length}
        />
        {/* <StatisticCard
          image="/images/private-offices.jpg"
          title="Reservas"
          description={`Total de reservas realizadas:`}
          number={user.bookings.length}
          percentage={100}
        /> */}
      </div>
    </div>
  );
}
