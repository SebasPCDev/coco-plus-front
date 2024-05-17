'use client';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import GetRequests from '@/utils/gets/getRequests';
import { useUserContext } from '../context';
import PostActivateRequest from '@/utils/posts/postActivateRequest';
import IResponseRequest from '@/utils/types/responseRequets';

export default function Requests() {
  const { token } = useUserContext();
  console.log(token);
  const [params, setParams] = useState({
    status: null,
    type: null,
  });
  const [requests, setRequests] = useState<IResponseRequest[]>([]);

  const getDarata = async () => {
    const response = await GetRequests({ token, params });
    if (response) {
      console.log(response);
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
      await PostActivateRequest({ token, id, type });
      getDarata();
    }
  };

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`mb-4 text-center md:text-4xl`}>Requests</h2>
      <div className="my-4 flex gap-8">
        <div className="rounded-md border-2 border-gray-300">
          <select
            onChange={handleChange}
            className="rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700"
            name="type"
          >
            <option value="null">Todos</option>
            <option value="company">Empresas</option>
            <option value="coworking">Coworkings</option>
          </select>
        </div>
        <div className="rounded-md border-2 border-gray-300">
          <select
            onChange={handleChange}
            className="rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700"
            name="status"
          >
            <option value="null">Todos</option>
            <option value="pending">Pendientes</option>
            <option value="close">Cerrados</option>
          </select>
        </div>
      </div>

      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {requests.map((item, i) => (
            <div
              key={item.id}
              className={clsx('flex flex-col py-4', {
                'border-t': i !== 0,
              })}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 flex items-center sm:mb-0">
                  <div className="min-w-0">
                    <h2 className="truncate font-semibold md:text-2xl">
                      {item.name} {item.lastname}
                    </h2>
                    <p className="text-gray-500">{item.email}</p>
                    <p className="text-gray-500">{item.phone}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <h2 className="truncate font-medium md:text-2xl">
                    {item.position} - {item.companyName}
                  </h2>
                  <p className="text-gray-500">{item.companyEmail}</p>
                  <p className="text-gray-500">{item.companyPhone}</p>
                  <p className="text-gray-500">{item.address}</p>
                  <p className="text-gray-500">{item.website}</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-500">
                  <strong>Message:</strong> {item.message}
                </p>
                <p className="text-gray-500">
                  <strong>Observation:</strong> {item.observation}
                </p>
                <p className="text-gray-500">
                  <strong>Status:</strong> {item.status}
                </p>
                <p className="text-gray-500">
                  <strong>Type:</strong> {item.type}
                </p>
              </div>
              <button
                onClick={handleAcept}
                className="rounded-lg bg-custom-secondary px-6 py-3 text-xl font-bold text-custom-white"
                id={item.id}
              >
                Aprobar
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-gray-500">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
