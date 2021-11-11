import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useModal from '../../contexts/ModalContext';
import useUserCart from '../../contexts/UserCartContext';
import { getThemeColor } from '../../theme/utils';
import LockScroll from '../LockScroll';
import CartItem from './CartItem';
import CheckoutSuccessfulModal from './CheckoutSuccessfulModal';

const UserCartWrapper = styled.aside<{ isVisible: boolean }>`
  display: grid;
  grid-template-rows: 2rem 1fr 3rem 5rem;
  gap: 1rem;

  padding: 1rem;
  background-color: ${getThemeColor('secondary')};
  border: 2px solid ${getThemeColor('primary')};

  position: fixed;
  inset: 7.2rem 1rem 1rem 1rem;
  transition: opacity 500ms;

  z-index: 100;

  @media(max-width: 1000px) {
    ${({ isVisible }) => !isVisible && css`
      opacity: 0;
      pointer-events: none;
    `}
  }
  
  border-radius: ${({ theme }) => theme.borderRadius};

  @media(min-width: 1000px) {
    right: 1rem;
    left: initial;
    width: 30rem;
  }

  h3 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const CheckoutButton = styled.button`
  border-radius: inherit;
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    background-color: ${getThemeColor('primary')};
    color: white;
  }
`;

export default function UserCart() {
  const {
    cartList,
    resetCart,
    isCartVisible,
  } = useUserCart();
  const { activeModal } = useModal();

  const [priceSum, setPriceSum] = useState('0');

  function handleCheckout() {
    activeModal(<CheckoutSuccessfulModal CheckoutTotalPrice={priceSum} />)
    resetCart();
  }

  useEffect(() => {
    const newPriceSum = cartList.reduce((sum, item) => {
      return (Number(sum) + Number(item.price)).toFixed(2);
    }, '0');

    setPriceSum(newPriceSum);
  }, [cartList])

  return (
    <UserCartWrapper isVisible={isCartVisible}>
      {isCartVisible && <LockScroll />}
      <h3>Carrinho</h3>
      <ul>
        {cartList.map((product, index) => (
          <CartItem key={product.id} product={product} index={index} />
        ))}
      </ul>
      <p>Total: R$ {priceSum}</p>
      <CheckoutButton type="button" onClick={handleCheckout}>Finalizar</CheckoutButton>
    </UserCartWrapper>
  );
}