import CoworkingBookingForm from '@/app/components/coworkingBookingForm';
import MapCoworking from '../mapCoworkings/index';
import CoworkingsBooking from '@/app/components/coworkingsBooking';
import GetCoworkingDetail from '@/utils/gets/getCoworkingDetail';
import GetCoworkingsFilter from '@/utils/gets/getCoworkingsFilter';
import { cookies } from 'next/headers';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
    page?: string;
    query?: string;
    country?: string;
    state?: string;
    city?: string;
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  const id = searchParams?.id || '';
  const country = searchParams?.country || '';
  const state = searchParams?.state || '';
  const city = searchParams?.city || '';
  const filter = { country, state, city };
  const coworking = await GetCoworkingDetail(id);
  const coworkings = await GetCoworkingsFilter({ filter: filter });

  return (
    <div className="gap-4 xl:grid xl:grid-cols-2 xl:grid-rows-1">
      <div>
        <CoworkingsBooking />
      </div>
      <div className="mt-10 px-2">
        <CoworkingBookingForm
          coworking={coworking}
          token={token}
          filter={filter}
          coworkings={coworkings.coworking}
        />
      </div>
    </div>
  );
}
