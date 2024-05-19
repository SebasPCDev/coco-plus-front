import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export default function DashboardCoworkingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2 w-full">
      <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="flex items-center">
          <ClipboardDocumentListIcon className="w-16" />
          <h1 className=" text-[36px] font-bold">Lista de Coworkings</h1>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
