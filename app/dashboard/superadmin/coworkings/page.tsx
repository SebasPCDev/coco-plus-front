import Pagination from '@/app/components/pagination/pagination';
import { InvoicesTableSkeleton } from '@/app/components/skeletons/superadmin/skeletons';
import { Suspense } from 'react';
import CoworkingsTable from '@/app/components/Tables/tableCoworkings';
import GetCoworkings from '@/utils/gets/getCoworkings';
import StatusHandler from '@/app/components/filtros/superadmin/statusQueryHandler';

export default async function PageCoworkings({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    status?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const status = searchParams?.status || '';
  const coworkingsData = await GetCoworkings(currentPage, status);
  const totalPages = Math.ceil(coworkingsData.total / coworkingsData.limit);

  return (
    <div className="w-full">
      <StatusHandler />
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CoworkingsTable coworkingsData={coworkingsData} />
      </Suspense>
      <div className="flex w-full">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
