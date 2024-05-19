import { cookies } from 'next/headers';
import {
  InactiveCompany,
  UpdateCompany,
} from '../../Buttons/dashboardSuperadmin/buttons';
import CompanyStatus from '../../Status/dashboardSuperadmin/statusCompany';

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
    <div className="mt-6 flow-root h-[35rem] w-full overflow-x-auto">
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
              {companiesRawData?.companies?.map((company: any) => (
                <tr
                  key={company.id}
                  className="w-full border-b py-3 text-center  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap  py-3 pl-6 pr-3">
                    <div className="flex items-center justify-center gap-3">
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
                    <CompanyStatus status={company.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
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
