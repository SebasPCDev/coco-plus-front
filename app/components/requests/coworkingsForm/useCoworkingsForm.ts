import React from 'react';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import ICoworkingsInfo from "@/utils/types/requests/coworkingsFormInterface";
import PostCoworkings from "@/utils/posts/postCoworkings";
import ICoworkingsErrorInfo from "@/utils/types/requests/coworkingFormErrorInterface";
import coworkingValidation from "@/utils/formValidation/coworkingValidation";
import Swal from "sweetalert2";
import { INITIAL_COWORKING_INFO_ERROR, INTIAL_COWORKING_INFO } from '@/utils/constants/requests/initialCoworkings';

const useCoworkingsForm = () => {

  const router = useRouter();
  const [coworkingInfo, setCoworkingInfo] = useState<ICoworkingsInfo>(INTIAL_COWORKING_INFO);

  const [coworkingInfoError, setCoworkingInfoError] =
    useState<ICoworkingsErrorInfo>(INITIAL_COWORKING_INFO_ERROR);

  useEffect(() => {
    const errors = coworkingValidation(coworkingInfo);
    setCoworkingInfoError(errors);
  }, [coworkingInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setCoworkingInfo({
      ...coworkingInfo,
      [name]: value,
    });
  };

  const handleChangePhone = (name: string, value: string) => {
    setCoworkingInfo({
      ...coworkingInfo,
      [name]: value,
    });
  }

  const handleCancel = () => {
    router.push("/");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await PostCoworkings(coworkingInfo);
      Swal.fire({
        title: response.responseCowork,
        text: "la respuesta se enviará a tu correo electronico",
        icon: "success",
      });
      router.push("/");
    } catch (error: any) {
      console.log("Error", error);
      Swal.fire({
        title: "Error enviando la solicitud",
        text: error.response.data.message || error.message,
        icon: "error",
      });
    }
  };

  //* Generador de horas cada 30 minutos con el horario establecido *****************
  const generateTimeOptions = () => {
    const options: string[] = [];// Aquí especificamos que options es un array de strings
    for (let hour = 6; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };
  return { coworkingInfo, coworkingInfoError, handleChange, handleChangePhone, handleSubmit, handleCancel, generateTimeOptions }
}
export default useCoworkingsForm