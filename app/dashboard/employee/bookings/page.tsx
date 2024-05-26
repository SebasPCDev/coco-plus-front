import CoworkingBookingForm from '@/app/components/coworkingBookingForm';
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
  let currentCoworking = null;
  if (id) {
    currentCoworking = await GetCoworkingDetail(id);
  }
  const allCoworkings = await GetCoworkingsFilter({ filter: filter });

  return (
    <div className="flex w-full flex-col-reverse xl:flex-row">
      <div className="xl:w-3/5">
        <CoworkingsBooking />
      </div>
      <div className="mt-10 px-2 xl:mr-3 xl:flex xl:w-2/5 xl:justify-start">
        <CoworkingBookingForm
          currentCoworking={currentCoworking}
          token={token}
          filter={filter}
          allCoworkings={allCoworkings.coworking}
        />
      </div>
    </div>
  );
}
