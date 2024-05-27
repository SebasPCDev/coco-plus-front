import { FC, ReactNode } from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const ModalImages: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full rounded-lg bg-white p-4 px-8 shadow-lg md:w-1/2">
        <button
          className="  absolute right-0 top-0 m-2 h-10  w-10 text-5xl text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalImages;
