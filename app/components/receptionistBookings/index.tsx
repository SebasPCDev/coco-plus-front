import BookingList from '@/app/components/Tables/tableBooking';
import { getSession } from '@/app/lib/session';
import { UserSession } from '@/app/lib/definitions';
import getBookingsById from '@/utils/api/coworkings/getBookingsById';
import getProfile from '@/utils/api/users/getProfile';

export default async function ReceptionistBookings() {
  const user = await getProfile();
  const bookings = await getBookingsById(user.coworkings[0].id);

  return (
    <div className={'mt-5'}>
      <BookingList
        bookings={bookings.bookings}
        coworkId={user.coworkings[0].id}
      />
    </div>
  );
}
