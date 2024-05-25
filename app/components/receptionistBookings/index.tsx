'use client';
import BookingList from '@/app/components/Tables/tableBooking';
import GetBookingsById from '@/utils/gets/getBookingsByID';
import GetProfile from '@/utils/gets/getProfile';
import { useUserContext } from '../context';
import { useEffect, useState } from 'react';

const ReceptionistBookings = () => {
  const [profile, setProfile] = useState<any>({});
  const [bookings, setBookings] = useState<any>([]);
  const [id, setId] = useState<any>('');
  const { token } = useUserContext();

  const fetchData = async () => {
    const user = await GetProfile({ token });
    if (user) {
      setProfile(user);
      const id = user.coworkings[0].id;
      setId(id);

      const bookings = await GetBookingsById({ token, id });
      setBookings(bookings);
      
    }
    
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  return (
      <div className={'mt-5'}>
          <h1>Recepcionistas</h1>
       
      <BookingList bookings={bookings} token={token} id={id} fetchData={fetchData} />
    </div>
  );
};

export default ReceptionistBookings;
