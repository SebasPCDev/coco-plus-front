'use client';
import getAllAmenities from '@/utils/gets/getAllAmenities';
import { IAmenitie } from '@/utils/types/editCoworking/editInfo/editCoworkingInterfaces';
import { useEffect, useState } from 'react';

const EditAmenities = ({
  arrayIdAmenities,
  setArrayIdAmenities,
}: {
  arrayIdAmenities: string[];
  setArrayIdAmenities: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [Amenities, setAmenities] = useState<IAmenitie[]>([]);

  const getAmenities = async () => {
    const response = await getAllAmenities();
    setAmenities(response);
  };

  useEffect(() => {
    getAmenities();
  }, []);

  const handleCheckboxChange = (amenitieId: string) => {
    setArrayIdAmenities((prev) =>
      prev.includes(amenitieId)
        ? prev.filter((id) => id !== amenitieId)
        : [...prev, amenitieId],
    );
  };

  return (
    <div>
      <p className="mb-4 w-1/3 pr-2">
        <strong>Comodidades</strong>
      </p>
      <div className="flex flex-row flex-wrap rounded-md border p-2">
        {Amenities.map((amenitie) => (
          <div key={amenitie.id} className="flex w-1/2 gap-1 border-b p-1">
            <input
              type="checkbox"
              name={amenitie.name}
              id={amenitie.name}
              value={amenitie.name}
              checked={arrayIdAmenities.includes(amenitie.id)}
              onChange={() => handleCheckboxChange(amenitie.id)}
              className="block rounded-lg border bg-gray-100 p-2.5 text-sm text-custom-secondary focus:border-custom-primary"
            />
            <label htmlFor={amenitie.name}>{amenitie.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditAmenities;
