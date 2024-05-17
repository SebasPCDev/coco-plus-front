'use client';
import Pagination from '../pagination';
import GetCompanies from '@/utils/gets/getCompanies';
import {
  DeleteCompany,
  UpdateCompany,
} from '../../Buttons/dashboardSuperadmin/buttons';
import CompanyStatus from '../../Status/dashboardSuperadmin/statusCompany';
import { useUserContext } from '../../context';
import { useEffect, useState } from 'react';
import { get } from 'http';

export default function CoworkingsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { token } = useUserContext();
  console.log(token);

  const [companiesData, setCompaniesData] = useState<IResponseCompany[]>([]);

  const getData = async () => {
    const response = await GetCompanies({ token });
    if (response) {
      console.log(response);
      setCompaniesData(response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-6 flow-root w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="founded-lg bg-gray-50 p-2 md:pt-0">
          {/* <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className=" text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-center  font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Teléfono
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  # Beneficiarios
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sector Empresarial
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tamaño Empresa
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {companiesData?.map((company) => (
                <tr
                  key={company.id}
                  className="w-full border-b py-3 text-center  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap  py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={company.thumbnail || '/images/placeholder.jpg'}
                        className="rounded-full"
                        width={80}
                        height={80}
                        alt={`${company.name}'s profile picture`}
                      /> */}
                      <p>{company.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {company.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {company.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {company.quantityBeneficiaries}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {company.businessSector}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {company.size}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3">
                    <CompanyStatus status={'active'} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCompany id={company.id} />
                      <DeleteCompany id={company.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination totalPages={5} />
        </div>
      </div>
    </div>
  );
}
