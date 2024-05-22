import CoworkingBookingForm from '@/app/components/coworkingBookingForm';
import CoworkingsBooking from '@/app/components/coworkingsBooking';
import Pagination from '@/app/components/pagination/pagination';
import GetCoworkingDetail from '@/utils/gets/getCoworkingDetail';
import { cookies } from 'next/headers';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    id?: string;
    page?: string;
    query?: string;
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  const id = searchParams?.id || '';
  const coworking = await GetCoworkingDetail(id);

  return (
    <div className="gap-4 xl:grid xl:grid-cols-2 xl:grid-rows-1">
      <div>
        <CoworkingsBooking />
      </div>
      <div>
        <CoworkingBookingForm coworking={coworking} token={token} />
      </div>
    </div>
  );
}
