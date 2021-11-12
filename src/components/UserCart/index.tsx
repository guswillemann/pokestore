import { useEffect, useState } from 'react';
import useModal from '../../contexts/ModalContext';
import useUserCart from '../../contexts/UserCartContext';
import LockScroll from '../LockScroll';
import CartItem from './CartItem';
import CheckoutSuccessfulModal from './CheckoutSuccessfulModal';
import UserCartWrapper, { CheckoutButton } from './styles';

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
      <h3>Cart</h3>
      <ul>
        {cartList.map((product, index) => (
          <CartItem key={product.id} product={product} index={index} />
        ))}
      </ul>
      <p className="total-price">Total: ${priceSum}</p>
      <CheckoutButton
        type="button"
        onClick={handleCheckout} 
        disabled={cartList.length === 0}
      >
        Checkout
      </CheckoutButton>
    </UserCartWrapper>
  );
}