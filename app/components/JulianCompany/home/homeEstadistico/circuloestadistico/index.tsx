import React from 'react';

interface StatisticCardProps {
  image: string;
  title: string;
  description: string;
  number: number;
  percentage: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ image, title, description, number, percentage }) => {
  const radius = 54; // Radio del círculo
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo
  const offset = circumference - (percentage / 100) * circumference; // Offset para el porcentaje

  return (
    <div className="relative bg-white shadow rounded-lg overflow-hidden w-64 h-96">
      <div className="relative">
        <img src='https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup-2048x1152.png' alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-32 h-32">
            <circle
              className="text-gray-300"
              strokeWidth="10"
              stroke="currentColor"
              fill="white"
              r={radius}
              cx="60"
              cy="60"
            />
            <circle
              className="text-green-500"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              style={{ transition: 'stroke-dashoffset 0.5s', direction: 'ltr' }}
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-xl font-semibold fill-current text-black"
            >
              {percentage}%
            </text>
          </svg>
        </div>
      </div>
      <div className="p-4 justify-center">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{description}</p>
        <p className="text-2xl text-center mt-6">{number}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
