import Pagination from '@/app/components/pagination/pagination';
import { InvoicesTableSkeleton } from '@/app/components/skeletons/superadmin/skeletons';
import { Suspense } from 'react';
import CoworkingsTable from '@/app/components/Tables/tableCoworkings';
import GetCoworkings from '@/utils/gets/getCoworkings';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const coworkingsData = await GetCoworkings(currentPage);
  const totalPages = Math.ceil(coworkingsData.total / coworkingsData.limit);

  return (
    <div className="w-full">
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CoworkingsTable coworkingsData={coworkingsData} />
      </Suspense>
      <div className="mt-5 flex w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
