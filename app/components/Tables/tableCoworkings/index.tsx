import Image from 'next/image';
import {
  UpdateInvoice,
  DeleteInvoice,
  UpdateCoworking,
  DeleteCoworking,
} from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import GetCoworkings from '@/utils/gets/getCoworkings';
import Pagination from '../pagination';
import CoworkingStatus from '@/app/ui/invoices/status';

export default async function CoworkingsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const coworkingsData = await GetCoworkings();
  console.log(coworkingsData);
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
                  País
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Provincia
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ciudad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Capacidad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {coworkingsData.coworking?.map((coworking) => (
                <tr
                  key={coworking.id}
                  className="w-full border-b py-3 text-center  last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap  py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={coworking.thumbnail || '/images/placeholder.jpg'}
                        className="rounded-full"
                        width={80}
                        height={80}
                        alt={`${coworking.name}'s profile picture`}
                      />
                      <p>{coworking.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {coworking.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {coworking.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {coworking.country || ''}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {coworking.state || ''}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {coworking.city || ''}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {coworking.capacity}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3">
                    <CoworkingStatus status={coworking.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCoworking id={coworking.id} />
                      <DeleteCoworking id={coworking.id} />
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
