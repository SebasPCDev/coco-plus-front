'use client';
import {
  ArrowPathIcon,
  CheckCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { MouseEventHandler, useEffect, useState } from 'react';
import GetRequests from '@/utils/gets/getRequests';
import { useUserContext } from '../context';
import PostActivateRequest from '@/utils/posts/postActivateRequest';
import IResponseRequest from '@/utils/types/responseRequets';
import CompanyStatus from '../Status/dashboardSuperadmin/statusCompany';
import CoworkingStatus from '../Status/dashboardSuperadmin/statusCoworking';
import DeclineRequest from '@/utils/posts/putDeclineRequest';
import Swal from 'sweetalert2';

export default function Requests() {
  const { token } = useUserContext();
  const [params, setParams] = useState({
    status: null,
    type: null,
  });
  const [requests, setRequests] = useState<IResponseRequest[]>([]);

  const getDarata = async () => {
    const response = await GetRequests({ token, params });
    if (response) {
      setRequests(response);
    }
  };

  useEffect(() => {
    getDarata();
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'null') {
      setParams({ ...params, [name]: null });
    } else {
      setParams({ ...params, [name]: value });
    }
  };

  const handleAcept: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const requestToAcept = requests.find((request) => request.id === id);
    let type = requestToAcept?.type;
    if (type === 'company') {
      type = 'companies';
    } else if (type === 'coworking') {
      type = 'coworkings';
    }
    if (type) {
      Swal.fire({
        title: '¿Estás seguro de aprobar esta solicitud?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#222B2D',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, activar',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await PostActivateRequest({ token, id, type });
          getDarata();
          Swal.fire('Aprobada', 'La solicitud ha sido aprobada', 'success');
        }
      });
    }
  };

  const handleDecline: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const requestToDecline = requests.find((request) => request.id === id);
    let type = requestToDecline?.type;
    if (type === 'company') {
      type = 'companies';
    } else if (type === 'coworking') {
      type = 'coworkings';
    }
    if (type) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#222B2D',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, rechazar',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await DeclineRequest({ token, Id: id });
          getDarata();
          Swal.fire('Rechazado', 'La solicitud ha sido rechazada', 'success');
        }
      });
    }
  };

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="my-4 flex gap-8">
        <p className="flex items-center font-bold">Filtrar por:</p>
        <div className="relative rounded-full border-2 border-gray-300">
          <select
            name="type"
            className="peer block w-full cursor-pointer rounded-md  border-gray-200 py-2 pl-10  outline-2 placeholder:text-gray-500"
            placeholder="Seleccionar"
            defaultValue=""
            onChange={handleChange}
          >
            <option value="null" className="text-gray-400">
              Tipo
            </option>
            <option value="company">Empresas</option>
            <option value="coworking">Coworkings</option>
          </select>
          <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
        <div className="relative rounded-full border-2 border-gray-300">
          <select
            name="status"
            placeholder="Seleccionar"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10  outline-2 placeholder:text-gray-500"
            onChange={handleChange}
          >
            <option value="null" className="text-gray-400">
              Estado
            </option>
            <option value="pending">Pendientes</option>
            <option value="close">Cerrados</option>
          </select>
          <CheckCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {requests.map((item, i) => (
            <div
              key={item.id}
              className={clsx('flex flex-col py-4', {
                'border-t': i !== 0,
              })}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="mb-2">
                  <h2 className="font-semibold md:text-2xl">
                    {item.name} {item.lastname}
                  </h2>
                  <p className="text-gray-500">{item.email}</p>
                  <p className="text-gray-500">{item.phone}</p>
                  <p className="text-gray-500">
                    <strong>Estado de la solicitud:</strong>{' '}
                    {item.type === 'company' ? (
                      <CompanyStatus status={item.status} />
                    ) : (
                      <CoworkingStatus status={item.status} />
                    )}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className=" font-medium md:text-2xl">
                    {item.position} - {item.companyName}
                  </h2>
                  <p className="text-gray-500">{item.companyEmail}</p>
                  <p className="text-gray-500">{item.companyPhone}</p>
                  <p className="text-gray-500">{item.address}</p>
                  <p className="text-gray-500">{item.website}</p>
                </div>
                <div className="mt-2">
                  <p className="text-gray-500">
                    <strong>Message:</strong> {item.message}
                  </p>
                  <p className="text-gray-500">
                    <strong>Observation:</strong> {item.observation}
                  </p>

                  {/* <p className="text-gray-500">
                    <strong>Type:</strong> {item.type}
                  </p> */}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className={`${
                    item.status !== 'close'
                      ? 'mt-4 w-60 rounded-lg bg-custom-tertiary px-6 py-3 font-bold text-custom-secondary hover:bg-custom-primary hover:text-custom-primary'
                      : 'mt-4 w-60 cursor-not-allowed rounded-lg bg-gray-300 px-6 py-3 opacity-50'
                  }}`}
                  id={item.id}
                  disabled={item.status === 'close'}
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAcept}
                  className={`
                  ${
                    item.status !== 'close'
                      ? 'mt-4 w-60 rounded-lg bg-custom-fourth px-6 py-3 font-bold text-custom-primary hover:bg-custom-secondary hover:text-custom-primary'
                      : 'mt-4 w-60  cursor-not-allowed rounded-lg  bg-gray-300  px-6  py-3 opacity-50'
                  }}`}
                  id={item.id}
                  disabled={item.status === 'close'}
                >
                  Aprobar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-gray-500">Actualizado justo ahora</h3>
        </div>
      </div>
    </div>
  );
}
