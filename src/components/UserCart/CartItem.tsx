import styled from 'styled-components';
import useUserCart, { ProductType } from '../../contexts/UserCartContext';
import { getThemeColor } from '../../theme/utils';

const CartItemWrapper = styled.li`
  @keyframes slideLeft {
    0% { transform: translateX(100%) }
    100% { transform: translateX(0) }
  }

  animation: slideLeft 500ms ease-in;

  display: grid;
  gap: 1rem;
  grid-template-columns: 4rem 1fr 10rem 1rem;
  height: 5rem;
  background-color: ${getThemeColor('background')};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  p {
    align-self: center;
  }

  .price-tag {
    margin-left: auto;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 0;
  }

  button:hover, button:focus {
    opacity: 0.5;
  }
`;

type CartItemPropsTypes = {
  product: ProductType;
  index: number;
}

export default function CartItem({ product, index }: CartItemPropsTypes) {
  const { removeItem } = useUserCart();

  return (
    <CartItemWrapper>
      <img src={product.img} alt="Imagem do produto" />
      <p>{product.name}</p>
      <p className="price-tag">{`R$ ${product.price}`}</p>
      <button
        type="button"
        onClick={() => removeItem(index)}
        aria-label="Remover item do carrinho"
      >
        <img src="/images/x-icon.svg" alt="X" />
      </button>
    </CartItemWrapper>
  );
}
