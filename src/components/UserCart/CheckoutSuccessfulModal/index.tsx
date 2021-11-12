import useModal from '../../../contexts/ModalContext';
import CheckoutSuccessfulModalWrapper from './styles';

export default function CheckoutSuccessfulModal({ CheckoutTotalPrice }: { CheckoutTotalPrice: string }) {
  const { toggleModal } = useModal();

  return (
    <CheckoutSuccessfulModalWrapper data-testid="checkout-modal">
      <button type="button" onClick={toggleModal}>
        <img src="/images/x-icon.svg" alt="X" aria-label="Close modal" />
      </button>
      <h2>Thank you !!!</h2>
      <p>Total price for your order:</p>
      <p>{`$${CheckoutTotalPrice}`}</p>
    </CheckoutSuccessfulModalWrapper>
  );
}