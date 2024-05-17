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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [postcode, setPostcode] = useState('');
  const [userType, setUserType] = useState('Member');
  const [monthlyTokenLimit, setMonthlyTokenLimit] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email, phone, jobRole, postcode, userType, monthlyTokenLimit });
    // Reiniciar los campos del formulario después de enviar
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setJobRole('');
    setPostcode('');
    setUserType('Member');
    setMonthlyTokenLimit(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto py-8">
      <div><h2 className="text-lg font-semibold mb-3 mt-4">Nombre</h2></div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block font-semibold mb-1">
            Nombre*
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-semibold mb-1">
            Apellido*
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-gray-100"
          />
        </div>
      </div>
      <div><h2 className="text-lg font-semibold mb-1 mt-10">Detalles Contacto</h2></div>
      <div className="grid grid-cols-2 gap-4">        
        <div className="mt-4">
            <label htmlFor="email" className="block font-semibold mb-1">
            Email*
            </label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-gray-100"
            />
        </div>
        <div className="mt-4">
            <label htmlFor="phone" className="block font-semibold mb-1">
            Teléfono (optional)
            </label>
            <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-gray-100"
            />
        </div>
      </div>
      <div><h2 className="text-lg font-semibold mb-1 mt-10">Contacto Adicional</h2></div> 
      <div className="grid grid-cols-2 gap-4">         
        <div className="mt-4">
            <label htmlFor="jobRole" className="block font-semibold mb-1">
            Cargo
            </label>
            <input
            type="text"
            id="jobRole"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
            className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-gray-100"
            />
        </div>
        <div className="mt-4">
            <label htmlFor="postcode" className="block font-semibold mb-1">
            Dirección (optional)
            </label>
            <input
            type="text"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="border border-gray-300 rounded-3xl px-3 py-2 w-full bg-gray-100"
            />
        </div>
      </div>
      <div><h2 className="text-lg font-semibold mb-1 mt-10">Permisos</h2></div>
      <div>    
        <div className="mt-4">
            <label htmlFor="monthlyTokenLimit" className="block font-semibold mb-1">
            Límite de pases mensuales (opcional)
            </label>
            <input
            type="number"
            id="monthlyTokenLimit"
            value={monthlyTokenLimit || ''}
            onChange={(e) => setMonthlyTokenLimit(e.target.value ? Number(e.target.value) : undefined)}
            className="border border-gray-300 rounded-3xl px-3 py-2 w-1/2 bg-gray-100"
            />
        </div>
        <div className="mt-4">
            <label htmlFor="userType" className="block font-semibold mb-1">
            Tipo de usuario
            </label>
            <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="border border-gray-300 rounded-3xl px-3 py-2 w-1/2 bg-gray-100"
            >
            <option value="Member">Empleado</option>
            {/* Agrega más opciones según tus necesidades */}
            </select>
        </div>
      </div>  
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => {}}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded"
          >        
          Agregar
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
