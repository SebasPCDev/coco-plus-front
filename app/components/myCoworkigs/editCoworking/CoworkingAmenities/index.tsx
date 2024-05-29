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
    
        <p className="w-1/3 pr-2 mb-4">
          <strong>Amenidades</strong>
        </p>
        <div className="flex flex-row flex-wrap border rounded-md p-2">
          {Amenities.map((amenitie) => (
            <div key={amenitie.id} className="flex w-1/2 border-b">
              <input
                type="checkbox"
                name={amenitie.name}
                id={amenitie.name}
                value={amenitie.name}
                checked={arrayIdAmenities.includes(amenitie.id)}
                onChange={() => handleCheckboxChange(amenitie.id)}
                className="block rounded-lg border bg-gray-100 p-2.5 text-sm text-custom-primary focus:border-blue-500"
              />
              <label htmlFor={amenitie.name}>{amenitie.name}</label>
            </div>
          ))}
        </div>
      </div>
    );
};

export default EditAmenities;
