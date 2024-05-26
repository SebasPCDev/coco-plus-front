import { useState } from 'react';
import { useUserContext } from '@/app/components/context';
import { useRouter } from 'next/navigation';
import PutImageThumbnail from '@/utils/puts/putImageThumbnail';
import PutImagesCoworking from '@/utils/puts/putImagesCoworking';
const useImagesContent = ({
  coworking,
  getData,
}: {
  coworking: any;
  getData: any;
}) => {
  const router = useRouter();
  const id = coworking.id;
  const { token } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isModalImagesOpen, setIsModalImagesOpen] = useState(false);

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
        getData();
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsModalOpen(false);
      
    }
  };

  const onModalImagesClick = () => {
    setIsModalImagesOpen(!isModalImagesOpen);
  };
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };
  const handleSubmitfiles = async (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedFiles.length === 0) return;

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('image', file);
    });

    try {
      const response = await PutImagesCoworking({
        id,
        token,
        formData,
      });

      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      alert(error.response.data.message);
    
  };

  return {
    isModalOpen,
    handleFileChange,
    handleSubmit,
    onModalClick,
    onModalImagesClick,
    handleFilesChange,
    handleSubmitfiles,
    isModalImagesOpen,
  };
};

export default useImagesContent;
