'use client';
import postBooking from '@/utils/posts/postBooking';
import useCoworkingsForm from '../requests/coworkingsForm/useCoworkingsForm';
import IResponseCoworking from '@/utils/types/coworkingsResponse';
import { useState } from 'react';
import Swal from 'sweetalert2';
import MapCoworking from '@/app/dashboard/employee/bookings/mapCoworkings';

export default function CoworkingBookingForm({
  currentCoworking,
  token,
  filter,
  allCoworkings,
}: {
  currentCoworking: IResponseCoworking;
  token: string | undefined;
  filter: { country: string; state: string; city: string };
  allCoworkings: IResponseCoworking;
}) {
  const { generateTimeOptions } = useCoworkingsForm();
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedTime, setSelectedTime] = useState<string>(''); // [1]
  const [selectedDate, setSelectedDate] = useState<string>(''); // [1]
  const [errorsTime, setErrorsTime] = useState<string[]>([]);

  const handleChangeTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const openingTime = currentCoworking.open as string;
    validateTime(value, openingTime);
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedDate(value);
  };

  const validateTime = (selectedTime: string, openingTime: string) => {
    const selectedMinutes = convertTimeToNumber(selectedTime);
    const openingMinutes = convertTimeToNumber(openingTime);

    if (selectedMinutes < openingMinutes) {
      setErrorsTime([
        `La hora seleccionada no está disponible en  ${currentCoworking.name}`,
      ]);
    } else {
      setErrorsTime([]);
      setSelectedTime(selectedTime);
    }
  };

  const convertTimeToNumber = (time: string) => {
    const [hours, minutes] = time.split(':');
    return Number(hours) + Number(minutes) / 60;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!errorsTime.length && selectedDate && selectedTime) {
      Swal.fire({
        title: '¿Estás seguro de reservar?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then(async (result) => {
        if (result.isConfirmed && currentCoworking.id) {
          try {
            const response = await postBooking({
              coworkingId: currentCoworking.id,
              reservationTime: selectedTime,
              reservationDate: selectedDate,
              token: token,
            });

            Swal.fire(
              `Tu reserva se ha registrado. Te avisaremos por correo electrónico cuando sea aprobado.`,
              '',
              'success',
            );
          } catch (error: any) {
            Swal.fire('Error', error, 'error');
          }
        }
      });
    } else {
      if (errorsTime.length) {
        Swal.fire('Error', errorsTime[0], 'error');
      } else {
        Swal.fire('Error', 'Selecciona una fecha y hora', 'error');
      }
    }
  };

  return (
    <div
      className={
        'mx-auto mb-5 py-5 text-center transition-opacity duration-300 ease-in-out xl:mx-0 xl:p-0 xl:text-start '
      }
    >
      <div>
        <h2 className="text-2xl font-bold">Reservar Coworking</h2>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col items-center gap-4 md:w-full xl:items-start 2xl:text-start">
            <div className="mt-5 flex min-w-[25rem] flex-col gap-2">
              <div>
                <label htmlFor="name" className="label-form mb-2 ">
                  Fecha
                </label>
                <input
                  type="date"
                  name="name"
                  min={currentDate}
                  id="name"
                  placeholder="Nombre"
                  className={'input-form'}
                  onChange={handleChangeDate}
                />
              </div>
              <label className="label-form ">Hora</label>
              <select className="input-form" onChange={handleChangeTime}>
                <option value="">Selecciona una hora</option>
                {generateTimeOptions().map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center xl:justify-start">
              <button className="btn btn-confirm" type="submit">
                Reservar
              </button>
            </div>
          </div>
        </form>
        {/* <div className="mt-4 hidden xl:block">
          <MapCoworking filter={filter} allCoworkings={allCoworkings} />
        </div> */}
      </div>
    </div>
  );
}
