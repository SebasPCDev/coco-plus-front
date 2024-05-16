// UserProfile.tsx
import React from 'react';

interface UserProfileProps {
  photoUrl: string;
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ photoUrl, name }) => {
  return (
    <div className="absolute right-0 m-4">
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
        <img src={photoUrl} alt={name} className="w-8 h-8 rounded-full object-cover" />
        <span className="text-sm font-semibold text-gray-700">{name}</span>
      </div>
    </div>
  );
};

export default UserProfile;
