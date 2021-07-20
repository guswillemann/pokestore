import { createContext, ReactNode, useContext, useState } from 'react';
import LockScroll from '../../components/LockScroll';
import Modal from './Modal';

type ModalContextTypes = {
  modalContents: ReactNode;
  activeModal: (contents: ReactNode) => void;
  toggleModal: () => void;
}

const ModalContext = createContext({} as ModalContextTypes);

type ModalProviderProps = {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalContents, setModalContents] = useState<ReactNode>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hasModalContents = Boolean(modalContents);

  function activeModal(contents: ReactNode) {
    setModalContents(contents);
    setIsModalVisible(true);
  }
  
  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <ModalContext.Provider value={{
      modalContents,
      activeModal,
      toggleModal,
    }}>
      {isModalVisible && <LockScroll />}
      {hasModalContents && <Modal isVisible={isModalVisible} />}
      {children}
    </ModalContext.Provider>
  );
}

export default function useModal() {
  return useContext(ModalContext);
};
