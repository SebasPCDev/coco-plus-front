import Pagination from '@/app/components/pagination/pagination';
import { InvoicesTableSkeleton } from '@/app/components/skeletons/superadmin/skeletons';
import { Suspense, useEffect, useState } from 'react';
import CoworkingsTable from '@/app/components/Tables/tableCoworkings';
import GetCoworkings from '@/utils/gets/getCoworkings';
import CompaniesTable from '@/app/components/Tables/tableCompanies';
import GetCompanies from '@/utils/gets/getCompanies';
import { useUserContext } from '@/app/components/context';
import { cookies } from 'next/headers';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  /* const { token } = useUserContext(); */

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const companiesData = await GetCompanies({ token });

  console.log(companiesData);
  const totalPages = 2;
  //const totalPages = Math.ceil(companiesData.total / companiesData.limit);

  return (
    <div className="w-full">
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CompaniesTable companiesRawData={companiesData} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
