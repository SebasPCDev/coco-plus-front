import React from 'react';
import { Ri24HoursFill, RiAddFill, RiDeleteBack2Fill, RiDeleteBin2Line, RiEditBoxLine, RiUserLine } from "@remixicon/react"

interface MemberCardProps {
  photoUrl: string;
  name: string;
  email: string;
  role: 'Admin' | 'Empleado';
  identification: string;
  passes: number;
  passesAvailable: number | null;
}

const MemberCard: React.FC<MemberCardProps> = ({
  photoUrl,
  name,
  email,
  role,
  identification,
  passes,
  passesAvailable,
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div>
        <div className="flex items-start space-x-4 break-all">
          <img
            src={photoUrl}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center justify-between flex-wrap">
              <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  role === 'Admin'
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {role}
              </span>
            </div>
            <p className="text-gray-600">{identification}</p>
            <p className="text-gray-600">{email}</p>
            <div className="my-2 border-b border-gray-200"></div>
            <div className="text-gray-600">
              <p>Total pases: {passes}</p>
              <p>
                Límite de pases disponibles:{' '}
                {passesAvailable !== null ? passesAvailable : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-4">
        <button className="rounded-full px-4 py-1 text-md font-semibold bg-custom-secondary text-custom-primary hover:bg-custom-primary hover:text-custom-secondary my-4 mr-4">
           Editar
        </button>
        <button className="rounded-full px-4 py-1 text-md font-semibold  bg-custom-primary text-custom-secondary hover:bg-custom-secondary hover:text-custom-primary mr-4">
           Pases
        </button>
        <button className="rounded-full px-4 py-1 text-md font-semibold bg-gray-300 text-custom-secondary hover:bg-red-500 hover:text-white">
           Eliminar
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
