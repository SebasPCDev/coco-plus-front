import Pagination from '@/app/components/pagination/pagination';
import { InvoicesTableSkeleton } from '@/app/components/skeletons/superadmin/skeletons';
import { Suspense } from 'react';
import CompaniesTable from '@/app/components/Tables/tableCompanies';
import GetCompanies from '@/utils/gets/getCompanies';
import { cookies } from 'next/headers';
import StatusHandler from '@/app/components/filtros/superadmin/statusQueryHandler';

export default async function PageCompanies({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    status?: string;
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const status = searchParams?.status || '';
  const companiesData = await GetCompanies({
    token,
    params: { page: currentPage, status },
  });

  const totalPages = Math.ceil(companiesData.total / companiesData.limit);

  return (
    <div className="w-full">
      <StatusHandler />
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CompaniesTable companiesRawData={companiesData} />
      </Suspense>
      <div className="mb-10 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
