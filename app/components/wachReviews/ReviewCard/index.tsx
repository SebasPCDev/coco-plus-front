import putResCoworkings from '@/utils/puts/putResReviews';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useUserContext } from '@/app/components/context';

const ReviewCard = ({ review, getAllReviews }) => {
  const { token } = useUserContext();
  const [contestar, setContestar] = useState(false);
  const [res, setRes] = useState('');

  const handleRes = (e) => {
    setRes(e.target.value);
  };

  const handleContestar = () => {
    setContestar(true);
  };

  const handleClick = async () => {
    const respuesta = {
      res_coworking: res,
    };

    const response = await putResCoworkings({ id, respuesta, token });
    getAllReviews();
  };

  const { coworking_rating, date, comment, res_coworking, id } = review;

  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="mb-4 rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Rating: {coworking_rating}⭐</h2>
        <span className="text-gray-500">{formattedDate}</span>
      </div>
      <div className="text-gray-700">
        <h3 className="font-semibold">Reseña</h3>
        <p>{comment ? comment : 'No comments provided.'}</p>
      </div>
      {res_coworking ? (
        <div className="text-gray-700">
          <h3 className="font-semibold">Tu Respuesta</h3>
          <p>{res_coworking}</p>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleContestar}
          className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contestar
        </button>
      )}
      {contestar && (
        <div className="mt-4">
          <textarea
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Tu Respuesta"
            onChange={handleRes}
            value={res}
          />
          <button
            type="button"
            onClick={handleClick}
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={!res} // Disable submit button if response is empty
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
