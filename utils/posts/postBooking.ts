import axios from 'axios';

const urlBase = process.env.NEXT_PUBLIC_API_URL;

const postBooking = async ({
  coworkingId,
  reservationTime,
  reservationDate,
  token,
}: {
  coworkingId: string;
  reservationTime: string;
  reservationDate: string;
  token: string | undefined;
}) => {
  const url = `${urlBase}/bookings`;
  const objetId = {
    coworkingId: coworkingId,
    reservationTime: reservationTime,
    reservationDate: reservationDate,
  };

  try {
    const response = await axios.post(url, objetId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    let message = '';
    if (error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
};

export default postBooking;
