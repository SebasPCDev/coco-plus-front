'use client';
import Image from 'next/image';
import Modal from '../../Modals/ModalNewUser';
import useImagesContent from './useImagesContent';
import { useState } from 'react';
import ModalImages from '../../Modals/ModalAddImages';


const ImagesContent = ({
  coworking,
  getData,
}: {
  coworking: any;
  getData: any;
  }) => {
  


  const {
    isModalOpen,
    handleFileChange,
    handleSubmit,
    onModalClick,
    onModalImagesClick,
    handleFilesChange,
    handleSubmitfiles,
    isModalImagesOpen,
  } = useImagesContent({ coworking: coworking, getData: getData });

  return (
    <div className="max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg xl:w-1/3">
      <h2 className="mb-2 text-xl font-semibold">Imagen de Portada</h2>
      <button
        onClick={onModalClick}
        className=" mx-auto my-2 block w-full rounded bg-custom-primary px-4 py-2 text-white"
      >
        {coworking.thumbnail ? 'Cambiar Imagen' : 'Agregar Imagen'}
      </button>
      <Modal isOpen={isModalOpen} onClose={onModalClick}>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <form onSubmit={handleSubmit} action="">
            <label
              htmlFor="image"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              Agrega la Imagen
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              name="image"
              id="image"
              className="mb-4 block w-full text-sm
                  text-gray-500 file:mr-4 file:rounded-full
                  file:border-0 file:bg-blue-50
                  file:px-4 file:py-2
                  file:text-sm file:font-semibold
                  file:text-blue-700
                  hover:file:bg-blue-100"
            />
            <button
              type="submit"
              className="w-full rounded bg-custom-primary px-4 py-2 text-white hover:bg-blue-700"
            >
              Agregar Imagen
            </button>
          </form>
        </div>
      </Modal>

      {coworking.thumbnail && (
        <Image
          src={coworking.thumbnail}
          alt={coworking.name || 'Coworking'}
          width={500}
          height={500}
          className="rounded-lg shadow-sm"
        />
      )}

      <h2 className="my-4 text-xl font-semibold">Imágenes Secundarias</h2>
      <div className="flex flex-col space-y-4">
        <button
          onClick={onModalImagesClick}
          className="mx-auto mb-4 mt-2 block w-full rounded bg-custom-primary px-4 py-2 text-white"
        >
          Agregar Imágenes
        </button>
        <ModalImages isOpen={isModalImagesOpen} onClose={onModalImagesClick}>
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <form onSubmit={handleSubmitfiles} action="">
              <label
                htmlFor="images"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                Agrega las Imágenes
              </label>
              <input
                onChange={handleFilesChange}
                type="file"
                name="images"
                id="images"
                multiple
                className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              />
              <button
                type="submit"
                className="w-full rounded bg-custom-primary px-4 py-2 text-white hover:bg-blue-700"
              >
                Agregar Imágenes
              </button>
            </form>
          </div>
        </ModalImages>
        {coworking.images.map((image) => (
          <Image
            key={image.id}
            src={image.secure_url}
            alt="Coworking space"
            className="rounded-lg shadow-sm"
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesContent;
