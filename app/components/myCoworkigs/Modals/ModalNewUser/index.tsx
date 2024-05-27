import { FC, ReactNode } from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-lg w-full md:w-1/2 bg-white p-4 shadow-lg px-8">
        
        <button
          className="  absolute right-0 top-0 m-2 text-gray-700  w-10 h-10 text-5xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
