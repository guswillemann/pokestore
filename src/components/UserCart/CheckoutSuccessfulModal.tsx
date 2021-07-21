import styled from 'styled-components';
import useModal from '../../contexts/ModalContext';
import { getThemeColor } from '../../theme/utils';

const CheckoutSuccessfulModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40rem;
  height: 30rem;
  position: relative;
  
  background-color: ${getThemeColor('primary')};
  color: white;

  border-radius: ${({ theme }) => theme.borderRadius};
  
  button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    width: 3rem;

    background-color: transparent;
    border: none;
    cursor: pointer;

    filter: invert();

    &:hover {
      opacity: 0.8;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }

  p {
    margin-top: 2rem;
  }
`;

export default function CheckoutSuccessfulModal({ CheckoutTotalPrice }: { CheckoutTotalPrice: string }) {
  const { toggleModal } = useModal();

  return (
    <CheckoutSuccessfulModalWrapper data-testid="checkout-modal">
      <button type="button" onClick={toggleModal}>
        <img src="/images/x-icon.svg" alt="X" aria-label="Fechar modal" />
      </button>
      <h2>Obrigado !!!</h2>
      <p>Você ganhou de volta</p>
      <p>{`R$ ${CheckoutTotalPrice}`}</p>
    </CheckoutSuccessfulModalWrapper>
  );
}