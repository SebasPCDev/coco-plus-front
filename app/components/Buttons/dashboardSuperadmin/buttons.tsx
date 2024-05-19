'use client';
import { ChangeStatusCompany, ChangeStatusCoworking } from '@/app/lib/actions';
import {
  DocumentMinusIcon,
  PencilIcon,
  PlusIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Swal from 'sweetalert2';

export function UpdateCoworking({ id }: { id: string }) {
  return (
    <Link href="#" className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-8" />
    </Link>
  );
}

export function InactiveCoworking({
  id,
  token,
}: {
  id: string;
  token?: string;
}) {
  const handleClick = () => {
    Swal.fire({
      title: '¿Estás seguro de querer inactivar este Coworking?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Desactivar',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          if (token) {
            ChangeStatusCoworking({ id, token }); //PENDIENTE
            Swal.fire(
              `Se ha inactivado el coworking correctamente`,
              '',
              'success',
            );
          }
        } catch (error) {}
      }
    });
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="rounded-md border p-2 hover:bg-red-50"
      >
        <span className="sr-only">Delete</span>
        <XCircleIcon className="w-8 text-red-600 " />
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

export function InactiveCompany({ id, token }: { id: string; token?: string }) {
  const handleClick = () => {
    Swal.fire({
      title: '¿Estás seguro de querer inactivar esta empresa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#222B2D',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Desactivar',
    }).then((result) => {
      if (result.isConfirmed) {
        ChangeStatusCompany({ id, token });
        Swal.fire(`La empresa ha sido inactivada.`, '', 'success');
      }
    });
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="rounded-md border p-2 hover:bg-red-50"
      >
        <span className="sr-only">Delete</span>
        <XCircleIcon className="w-8 text-red-600 " />
      </button>
    </>
  );
}

export function UpdateUser({ id }: { id: string }) {
  return (
    <Link href="#" className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-8" />
    </Link>
  );
}

export function InactiveUser({ id }: { id: string }) {
  return (
    <>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <DocumentMinusIcon className="w-8" />
      </button>
    </>
  );
}
