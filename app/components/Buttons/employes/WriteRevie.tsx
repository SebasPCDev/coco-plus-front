'use client';
import React, { useEffect, useState } from 'react';
import Modal from '../../myCoworkigs/Modals/ModalNewUser';
import ReactStars from 'react-rating-stars-component';
import postReview from '@/utils/posts/postReviews';
import { useUserContext } from '../../context';
import GetBooking from '@/utils/gets/getBooking';
import getCowork from '../../coworkings/[id]/getCowork';
import Swal from 'sweetalert2';

export function WriteReviewButton({ id }: { id: string }) {
  const { user, token } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [CoworkingId, setCoworkingId] = useState<string>(null);

  const getbookings = async () => {
    const booking = await GetBooking({ token, id });
    setCoworkingId(booking.coworking.id);
  };

  useEffect(() => {
    getbookings();
  }, []);

  const onModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = {
      coworking_rating: rating,
      comment: review,
      user_id: user.id,
      coworking_id: CoworkingId,
    };

    setIsModalOpen(false);

    try {
      postReview({ newReview: reviewData, token });
      Swal.fire({
        title: 'Reseña enviada',
        text: 'Gracias por tu opinión',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#222B2D',
      });
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={onModalClick} className="btn btn-cancel !mt-0">
        Escribir Reseña
      </button>
      <Modal isOpen={isModalOpen} onClose={onModalClick}>
        <div>
          <h1 className="my-4 text-2xl font-bold">
            Cuentános que te pareció la experiencia 😄
          </h1>
          <form onSubmit={handleSubmit} className=" flex flex-col items-center">
            <div className="form-group">
              <textarea
                id="review"
                className="form-control w-[40rem] "
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="rating" className="label-form mb-3 ">
                Rating
              </label>
              <div className="mb-4 flex justify-center">
                <ReactStars
                  count={5}
                  onChange={(newRating) => setRating(newRating)}
                  size={35}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-confirm">
              Enviar
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default WriteReviewButton;
