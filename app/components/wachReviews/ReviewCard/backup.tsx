import React from 'react';
import { useState } from 'react';

const ReviewCard = ({ review, getAllReviews }) => {
  const [isResponding, setIsResponding] = useState(false);
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleReplyClick = () => {
    setIsResponding(true);
  };

  const handleReplySubmit = async () => {
    const respuesta = {
      res_coworking: response,
    };

    // Implement API call with respuesta and token
    const response = await putResCoworkings({ id, respuesta, token }); // Replace with actual API call
    getAllReviews();
    setIsResponding(false);
    setResponse(''); // Clear response after successful submission
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
          onClick={handleReplyClick}
          className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contestar
        </button>
      )}
      {isResponding && (
        <div className="mt-4">
          <textarea
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Tu Respuesta"
            onChange={handleResponseChange}
            value={response}
          />
          <button
            type="button"
            onClick={handleReplySubmit}
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={!response} // Disable submit button if response is empty
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
