import styled, { css } from 'styled-components';
import useModal from '.';

const ModalWrapper = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  background-color: rgba(0,0,0,.8);

  z-index: 1000;

  ${({ isVisible }) => !isVisible && css`
    opacity: 0;
    pointer-events: none;
  `}
`;

export default function Modal({ isVisible }: { isVisible: boolean }) {
  const { toggleModal, modalContents } = useModal();

  function closeModal(e: any) {
    if (e.target.id === 'modal-container') toggleModal();
  }

  return (
    <ModalWrapper
      id="modal-container"
      onClick={closeModal}
      isVisible={isVisible}
    >
      {modalContents}
    </ModalWrapper>
  );
}
