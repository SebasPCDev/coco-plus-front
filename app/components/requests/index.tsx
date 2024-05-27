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
import styles from './reqests.module.css';
import { StatusRequest } from '@/utils/types/requests/statusRequest';
import RequestStatus from '../Status/dashboardSuperadmin/statusRequest';

export default function Requests() {
  const { token } = useUserContext();
  const [params, setParams] = useState({
    status: null,
    type: null,
  });
  const [requests, setRequests] = useState<IResponseRequest[]>([]);
  console.log(requests);

  const getDarata = async () => {
    const response = await GetRequests({ token, params });
    if (response) {
      setRequests(response);
    }
  };

  useEffect(() => {
    getDarata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          try {
            const response = await PostActivateRequest({ token, id, type });

            getDarata();
            Swal.fire('Aprobada', 'La solicitud ha sido aprobada', 'success');
          } catch (error: any) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error,
            });
          }
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

  const transformDate = (date: any) => {
    const opcionesDeFormato: any = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    const newDate = new Date(date);
    const formatedDate = newDate.toLocaleDateString('es-ES', opcionesDeFormato);
    return formatedDate;
  };

  return (
    <div className="md: flex w-full flex-col text-sm md:col-span-4">
      <div className={styles.filterContainer}>
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

      <div className="flex flex-col justify-between rounded-xl bg-gray-50">
        <div className={styles.gralContItem}>
          {requests.map((item, i) => (
            <div key={item.id} className={styles.itemReqContainer}>
              <div className={styles.responsiveContainerInfoRequests}>
                <div className="mb-2">
                  <h2 className="font-semibold md:text-xl">
                    {item.name} {item.lastname}
                  </h2>
                  <br />
                  <p className="text-gray-700">
                    <b>Tipo:</b>{' '}
                    {item.type == 'coworking' ? (
                      <b style={{ color: '#004906' }}>Coworking</b>
                    ) : (
                      item.type == 'company' && (
                        <b style={{ color: '#5c3000' }}>Empresa</b>
                      )
                    )}
                  </p>
                  <p className="text-gray-700">
                    <b>Email:</b> {item.email || 'No disponible'}
                  </p>
                  <p className="text-gray-700">
                    <b>Telefono:</b> {item.phone}
                  </p>
                  <p className="text-gray-700">
                    <b>Fecha de solicitud: </b>
                    {transformDate(item.dateCreated)}
                  </p>
                  <p className="mt-5 text-gray-700">
                    <RequestStatus status={item.status!} />
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className={styles.bigTitle}>
                    <b>
                      {item.position} <br /> {item.companyName}
                    </b>
                  </h2>
                  <br />
                  <p className="text-gray-700">
                    <b>Email: </b>
                    {item.companyEmail || 'No diligenciado'}
                  </p>
                  <p className="text-gray-700">
                    <b>Telefono: </b>
                    {item.companyPhone || 'No diligenciado'}
                  </p>
                  <p className="text-gray-700">
                    <b>Direcion: </b>
                    {item.address || 'No diligenciado'}
                  </p>
                  <p className="text-gray-700">
                    <b>Web: </b>
                    {item.website || 'No diligenciado'}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-gray-700">
                    <strong>Mensaje:</strong> {item.message}
                  </p>
                  <p className="text-gray-700">
                    <strong>Observación :</strong> {item.observation}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className={`${
                    item.status !== 'close'
                      ? 'mt-4 w-40 rounded-lg bg-custom-tertiary px-6 py-3 font-bold text-custom-secondary hover:bg-custom-primary hover:text-custom-secondary'
                      : 'btn btn-disabled'
                  }`}
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
                      ? 'mt-4 w-40 rounded-lg bg-custom-fourth px-6 py-3 font-bold text-custom-primary hover:bg-custom-secondary hover:text-custom-primary'
                      : 'btn btn-disabled'
                  }`}
                  id={item.id}
                  disabled={item.status === 'close'}
                >
                  Aprobar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.updateNowCont}>
          <ArrowPathIcon className="h-5 w-5 text-gray-700" />
          <h3 className="ml-2 text-gray-700">Actualizado justo ahora</h3>
        </div>
      </div>
    </div>
  );
}
