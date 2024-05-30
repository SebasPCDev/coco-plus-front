import UsersTable from '@/app/components/Tables/tableUsers/index';
import RoleHandler from '@/app/components/filtros/superadmin/roleQueryHandler';
import StatusHandler from '@/app/components/filtros/superadmin/statusQueryHandler';
import Pagination from '@/app/components/pagination/pagination';
import getAllUsers from '@/utils/api/users/getAllUsers';

export default async function UsersTablePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    status?: string;
    role?: string;
  };
}) {
  const status = searchParams?.status || '';
  const page = Number(searchParams?.page) || 1;
  const role = searchParams?.role || '';
  const limit = 6;
  let url = `?page=${page}&limit=${limit}`;
  if (status) url = url + `&status=${status}`;
  if (role) url = url + `&role=${role}`;
  const usersData = await getAllUsers(url);
  const totalPages = Math.ceil(usersData.total / usersData.limit);
  return (
    <>
      <div>
        <div>
          <div className="flex w-[15rem] flex-col sm:w-full sm:flex-row">
            <StatusHandler />
            <RoleHandler />
          </div>

          <UsersTable usersData={usersData} />
        </div>
        <div className="flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
