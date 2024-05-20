import React from 'react';

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
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-4">
        <img
          src={photoUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
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
          <div className="border-b border-gray-200 my-2"></div>
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
  );
};

export default MemberCard;