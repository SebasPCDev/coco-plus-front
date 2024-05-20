'use client';
import { useUserContext } from '@/app/components/context';
import GetProfile from '@/utils/gets/getProfile';
import PostCreateEmployee from '@/utils/posts/postCreateEmployee';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface MemberFormProps {
  onSubmit: (member: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    jobRole: string;
    postcode?: string;
    userType: string;
    monthlyTokenLimit?: number;
  }) => void;
}

const MemberForm: React.FC<MemberFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const { token } = useUserContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [identification, setIdentification] = useState('');
  const [phone, setPhone] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [postcode, setPostcode] = useState('');
  const [userType, setUserType] = useState('Member');
  const [monthlyTokenLimit, setMonthlyTokenLimit] = useState<
    number | undefined
  >(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) return;
    const profile = await GetProfile({token});
    const companyId = profile?.employee.company?.id;
    console.log(profile)
    const newEmployee = {
      name: firstName,
      lastname:lastName,
      email,
      phone,
      identification: identification,
      position: jobRole,
      role: 'employee',
      status: 'active',
      passes: Number(monthlyTokenLimit),
      passesAvailable: Number(monthlyTokenLimit),
      companyId,
    };
    console.log("newEmployee", newEmployee);
    const data =await PostCreateEmployee(newEmployee, token);
    console.log("data", data);
    onSubmit({
      firstName,
      lastName,
      email,
      phone,
      jobRole,
      postcode,
      userType,
      monthlyTokenLimit,
    });
    // Reiniciar los campos del formulario después de enviar
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setJobRole('');
    setPostcode('');
    setUserType('Member');
    setMonthlyTokenLimit(undefined);
    router.push('/dashboard/adminCompany/empleados');
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto py-8">
      <div>
        <h2 className="mb-3 mt-4 text-lg font-semibold">Nombre</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">        
        <div>
          <label htmlFor="firstName" className="mb-1 block font-semibold">
            Nombre*
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full cursor-pointer rounded-3xl border-custom-secondary  bg-gray-100 px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block font-semibold">
            Apellido*
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full cursor-pointer rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div>        
      </div>
      <div>
        <h2 className="mb-1 mt-10 text-lg font-semibold">Detalles Contacto</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4">
          <label htmlFor="email" className="mb-1 block font-semibold">
            Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full cursor-pointer rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="mb-1 block font-semibold">
            Teléfono (optional)
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full cursor-pointer rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div>
      </div>      
      <div>
        <br />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4">
          <label htmlFor="jobRole" className="mb-1 block font-semibold">
            Identificación
          </label>
          <input
            type="text"
            id="identification"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
            required
            className="w-full cursor-pointer rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-1 mt-10 text-lg font-semibold">Información Adicional</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4">
          <label htmlFor="jobRole" className="mb-1 block font-semibold">
            Cargo
          </label>
          <input
            type="text"
            id="jobRole"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
            className="w-full cursor-pointer rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div>
        {/* <div className="mt-4">
          <label htmlFor="postcode" className="mb-1 block font-semibold">
            Dirección (optional)
          </label>
          <input
            type="text"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="w-full rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div> */}
      </div>
      <div>
        <h2 className="mb-1 mt-10 text-lg font-semibold">Permisos</h2>
      </div>
      <div>
        <div className="mt-4">
          <label
            htmlFor="monthlyTokenLimit"
            className="mb-1 block font-semibold"
          >
            Límite de pases mensuales (opcional)
          </label>
          <input
            name='passes'
            type="number"
            id="monthlyTokenLimit"
            value={monthlyTokenLimit || ''}
            onChange={(e) =>
              setMonthlyTokenLimit(
                e.target.value ? Number(e.target.value) : undefined,
              )
            }
            className="w-1/2 cursor-pointer rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          />
        </div>
        {/*
        <div className="mt-4">
          <label htmlFor="userType" className="mb-1 block font-semibold">
            Tipo de usuario
          </label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-1/2 rounded-3xl border border-gray-300 bg-gray-100 px-3 py-2"
          >
            <option value="Member">Empleado</option>
            
          </select> 
          </div>*/}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => {}}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4  font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </button>        
        <button
          type="submit"
          className="flex h-10 items-center rounded-lg bg-custom-secondary px-4 py-2 font-semibold text-custom-white hover:bg-custom-primary hover:text-custom-secondary"
        >
          Agregar
        </button>        
      </div>
    </form>
  );
};

export default MemberForm;
