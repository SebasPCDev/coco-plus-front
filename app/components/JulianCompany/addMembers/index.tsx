'use client';
// CompanySettings.tsx
import React from 'react';
import Navbar from './navbarAddMembers';
import ImportCSV from './fotoMember';
import MemberForm from './memberForm';

interface MemberData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobRole: string;
  postcode?: string;
  userType: string;
  monthlyTokenLimit?: number;
}

const CompanySettings: React.FC = () => {
  const handleMemberSubmit = (memberData: MemberData) => {
    // Aquí puedes realizar alguna acción con los datos del nuevo miembro, como enviarlos a un servidor
  };

  return (
    <div className="w-full">
      <Navbar />
      {/* <ImportCSV /> */}
      <MemberForm onSubmit={handleMemberSubmit} />
    </div>
  );
};

export default CompanySettings;
