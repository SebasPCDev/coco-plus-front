// StatisticCard.jsx
import React from 'react';

interface StatisticCardProps {
    title: string;
    stats: string[]; // Ajusta el tipo según lo que realmente sea 'stats'
  }

const StatisticCard: React.FC<StatisticCardProps> = ({ title, stats }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {stats.map((stat, index) => (
          <li key={index} className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span>{stat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticCard;