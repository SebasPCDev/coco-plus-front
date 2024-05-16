import {
  DocumentMinusIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateCoworking() {
  return (
    <Link
      href="#"
      className="flex h-12 items-center justify-center rounded-lg bg-custom-fourth px-4 font-medium text-custom-primary transition-colors hover:bg-custom-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-primary"
    >
      <span className="hidden md:block">Crear Coworking</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCoworking({ id }: { id: string }) {
  return (
    <Link href="#" className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-8" />
    </Link>
  );
}

export function DeleteCoworking({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <DocumentMinusIcon className="w-8" />
      </button>
    </>
  );
}

export function CreateCompany() {
  return (
    <Link
      href="#"
      className="flex h-12 items-center justify-center rounded-lg bg-custom-fourth px-4 font-medium text-custom-primary transition-colors hover:bg-custom-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-primary"
    >
      <span className="hidden md:block">Crear Empresa</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCompany({ id }: { id: string }) {
  return (
    <Link href="#" className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-8" />
    </Link>
  );
}

export function DeleteCompany({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <DocumentMinusIcon className="w-8" />
      </button>
    </>
  );
}
