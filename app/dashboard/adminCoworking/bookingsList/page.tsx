import HeadquartersCoworkings from '@/app/components/filtros/adminCoworking/headquartersCoworkings';
import BookingList from '@/app/components/shared/bookingsList';
import GetBookingsById from '@/utils/gets/getBookingsByID';
import GetProfile from '@/utils/gets/getProfile';
import { cookies } from 'next/headers';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    headquarter?: string;
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  const user = await GetProfile({ token });
  const headquarter = searchParams?.headquarter || user.coworkings[0].id;
  const currentCoworking = user.coworkings.filter((coworking: any) => {
    return coworking.id === headquarter;
  });
  const bookings = await GetBookingsById({ token, id: currentCoworking[0].id });
  console.log(bookings);
  return (
    <div className={'mt-5'}>
      <HeadquartersCoworkings headquarters={user.coworkings} />
      <BookingList bookings={bookings} />
    </div>
  );
}
