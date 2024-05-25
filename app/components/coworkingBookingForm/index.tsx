'use client';
import postBooking from '@/utils/posts/postBooking';
import useCoworkingsForm from '../requests/coworkingsForm/useCoworkingsForm';
import IResponseCoworking from '@/utils/types/coworkingsResponse';
import { useState } from 'react';
import Swal from 'sweetalert2';
import MapCoworking from '@/app/dashboard/employee/mapCoworkings';

export default function CoworkingBookingForm({
  coworking,
  token,
  filter,
  coworkings,
}: {
  coworking: IResponseCoworking;
  token: string | undefined;
  filter: { country: string; state: string; city: string };
  coworkings: IResponseCoworking;
}) {
  const { generateTimeOptions } = useCoworkingsForm();
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedTime, setSelectedTime] = useState<string>(''); // [1]
  const [selectedDate, setSelectedDate] = useState<string>(''); // [1]
  const [errorsTime, setErrorsTime] = useState<string[]>([]);

  const handleChangeTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const openingTime = coworking.open;
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
        `La hora seleccionada no está disponible en  ${coworking.name}`,
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
        if (result.isConfirmed && coworking.id) {
          try {
            const response = await postBooking({
              coworkingId: coworking.id,
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
        'mx-auto mb-5 w-full py-5 text-center transition-opacity duration-300 ease-in-out xl:mx-0 xl:p-0 xl:text-start '
      }
    >
      <div>
        <h2 className="text-2xl font-bold">Reservar Coworking</h2>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col  gap-4  md:w-full md:text-center">
            <div className="mt-5 flex max-w-[25rem] flex-col justify-start gap-2">
              <div>
                <label htmlFor="name" className="label-form mb-2 text-start">
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
              <label className="label-form text-start">Hora</label>
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
        <div className="mt-4">
          <MapCoworking filter={filter} coworkings={coworkings.coworking} />
        </div>
      </div>
    </div>
  );
}
