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
      <div className="rounded-lg w-2/3 bg-white p-4 shadow-lg">
        <button
          className="absolute right-0 top-0 m-2 text-gray-700"
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
