'use client';
import GetProfile from '@/utils/gets/getProfile';
import getReviewsCo from '@/utils/gets/getReviewsCowork';
import { useEffect, useState } from 'react';
import { useUserContext } from '@/app/components/context';
import ReviewCard from './ReviewCard';

const ListReviews = () => {
  const [CoworkingId, setCoworkingId] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { token } = useUserContext();

  const getProfile = async () => {
    try {
      const profile = await GetProfile({ token });
      if (profile.coworkings && profile.coworkings.length > 0) {
        setCoworkingId(profile.coworkings[0].id);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const getAllReviews = async () => {
    if (CoworkingId) {
      try {
        const coworksReviews = await getReviewsCo({ id: CoworkingId });
        setReviews(coworksReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  useEffect(() => {
    getAllReviews();
  }, [CoworkingId]);

  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} getAllReviews={getAllReviews} />
      ))}

      <h1>Aquí se verán las reseñas</h1>
    </div>
  );
};

export default ListReviews;