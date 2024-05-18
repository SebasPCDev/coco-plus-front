'use client';
import Image from 'next/image';
import Modal from '../../Modals/ModalNewUser';
import useImagesContent from './useImagesContent';

const ImagesContent = ({ coworking }: { coworking: any }) => {
  const { isModalOpen, handleFileChange, handleSubmit, onModalClick } =
    useImagesContent({ coworking: coworking } );

  return (
    <div className="max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:w-1/3">
      <h2 className="mb-2 text-xl font-semibold">Imagen de Portada</h2>
      <button
        onClick={onModalClick}
        className="mt-4 block w-full rounded-lg border bg-gray-100"
      >
        {coworking.thumbnail ? 'Cambiar Imagen' : 'Agregar Imagen'}
      </button>
      <Modal isOpen={isModalOpen} onClose={onModalClick}>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="image">Agrega la Imagen</label>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            id="image"
          />
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            agregar imagen
          </button>
        </form>
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
        <button className="mt-4 rounded-lg border bg-gray-100">
          Agregar Imágenes
        </button>
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
