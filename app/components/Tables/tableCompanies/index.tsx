import { cookies } from 'next/headers';
import {
  InactiveCompany,
  UpdateCompany,
} from '../../Buttons/dashboardSuperadmin/buttons';
import CompanyStatus from '../../Status/dashboardSuperadmin/statusCompany';
import styles from './tableCompany.module.css';
import CompanyStatusFunction from '../../Status/dashboardSuperadmin/statusCompany';

export default function CompaniesTable({
  companiesRawData,
}: {
  companiesRawData?: {
    page: number;
    limit: number;
    total: number;
    companies: [];
  };
}) {
  const cookie = cookies();
  const token = cookie.get('token')?.value;
  return (
    <div className="mt-6 flow-root min-h-[28rem] w-full overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          <div className="xl:hidden">
            {companiesRawData?.companies?.map((company: any) => (
              <div key={company.id} className={styles.gralContainer}>
                <div className={styles.titleAndContItemsContainer}>
                  <div className="mb-2 flex items-center">
                    <p className="font-bold">{company.name}</p>
                  </div>
                  <div className={styles.itemsContainerAndStatus}>
                    <div className={styles.itemResponsiveTableContainer}>
                      <div className={styles.itemFlexTableContainer}>
                        <p className=" text-gray-700">
                          <b>
                            Email: <br />
                          </b>
                          {company.email}
                        </p>
                        <p className=" text-gray-700">
                          <b>
                            Telefono: <br />
                          </b>
                          {company.phone}
                        </p>
                      </div>
                      <div className={styles.itemFlexTableContainer}>
                        <p className=" text-gray-700">
                          <b>
                            Beneficiarios: <br />
                          </b>
                          {company.quantityBeneficiaries}
                        </p>
                        <p className=" text-gray-700">
                          <b>
                            Sector: <br />
                          </b>
                          {company.businessSector}
                        </p>
                      </div>
                      <div className={styles.itemFlexTableContainer}>
                        <p className=" text-gray-700">
                          <b>
                            Tamaño: <br />
                          </b>
                          {company.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.statusContainer}>
                    <CompanyStatus status={company.status} />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateCompany id={company.id} />
                    <InactiveCompany id={company.id} token={token} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-sm text-gray-900 lg:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Email
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className=" py-5 font-medium">
                  # Beneficiarios
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Sector Empresarial
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Tamaño Empresa
                </th>
                <th scope="col" className=" py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-1 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-x-auto bg-white">
              {companiesRawData?.companies?.map((company: any) => (
                <tr
                  key={company.id}
                  className="w-full border-b py-1 text-center  last-of-type:border-none hover:bg-gray-100 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="max-w-[150px] truncate whitespace-nowrap py-1 pl-6 pr-3">
                    <div className="flex items-center justify-center gap-3">
                      <p>{company.name}</p>
                    </div>
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {company.email}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {company.phone}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {company.quantityBeneficiaries}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {company.businessSector}
                  </td>
                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    {company.size}
                  </td>

                  <td className="max-w-[150px] truncate whitespace-nowrap  py-1">
                    <CompanyStatusFunction status={company.status} />
                  </td>
                  <td className="whitespace-nowrap py-1 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCompany id={company.id} />
                      <InactiveCompany id={company.id} token={token} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
