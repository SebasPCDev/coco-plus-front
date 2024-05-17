import React from 'react';

interface TopPickCardProps {
  image: string;
  title: string;
  location: string;
}

const TopPickCard: React.FC<TopPickCardProps> = ({ image, title, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{location}</p>
      </div>
    </div>
  );
};

export default TopPickCard;