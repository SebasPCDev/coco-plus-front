'use client';
import React, { useEffect, useState } from 'react';
import Modal from '../../myCoworkigs/Modals/ModalNewUser';
import ReactStars from 'react-rating-stars-component';
import postReview from '@/utils/posts/postReviews';
import { useUserContext } from '../../context';
import getProfile from '@/utils/api/users/getProfile';
import GetBooking from '@/utils/gets/getBooking';

export function WriteReviewButton({ id }: { id: string }) {
  const { user, token } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [CoworkingId, setCoworkingId] = useState([]);

  const getbookings = async () => {
    const booking = await GetBooking({ token, id });
    setCoworkingId(booking.coworking.id);
  };
  useEffect(() => {
    getbookings();
  });

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
    postReview({ newReview: reviewData, token });
  };

  return (
    <div>
      <button onClick={onModalClick} className="btn btn-primary">
        hacer una reseña
      </button>
      <Modal isOpen={isModalOpen} onClose={onModalClick}>
        <div>
          <h1 className="my-4 text-2xl font-bold">Escribe una Reseña</h1>
          <form onSubmit={handleSubmit} className=" flex flex-col items-center">
            <div className="form-group">
              <label htmlFor="review">Aca su reseña</label>
              <textarea
                id="review"
                className="form-control "
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <div className="flex justify-center">
                <ReactStars
                  count={5}
                  onChange={(newRating) => setRating(newRating)}
                  size={35}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-confirm">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default WriteReviewButton;
