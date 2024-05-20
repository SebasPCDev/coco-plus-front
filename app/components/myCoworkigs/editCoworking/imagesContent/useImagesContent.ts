import { useState } from 'react';
import { useUserContext } from '@/app/components/context';
import { useRouter } from 'next/navigation';
import PutImageThumbnail from '@/utils/puts/putImageThumbnail';
const useImagesContent = ({ coworking }: { coworking: any }) => {
  const router = useRouter();
  const id = coworking.id;
  const { token } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onModalClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) return;

    const imageThumbnail = new FormData();
    imageThumbnail.append('image', selectedFile);

    try {
      const response = await PutImageThumbnail({
        id,
        token,
        imageThumbnail,
      });

      if (response.status === 200) {
        console.log('Imagen enviada con éxito');

        // Aquí podrías actualizar el estado o realizar cualquier otra acción necesaria
      } else {
        console.error('Error al enviar la imagen');
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsModalOpen(false);
      // Cierra el modal después de enviar la imagen
    }
  };

  return {
    isModalOpen,

    handleFileChange,
    handleSubmit,
    onModalClick,
  };
};

export default useImagesContent;
