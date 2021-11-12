import styled, { keyframes } from 'styled-components';
import { getThemeColor } from '../../../theme/utils';

const itemGrow = keyframes`
  from {
    transform: scale(0.75);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const CartItemWrapper = styled.li`
  animation: ${itemGrow} 300ms ease-in-out forwards;

  display: flex;
  background-color: ${getThemeColor('background')};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;

  & > img {
    max-width: 30%;
  }

  .item-info {
    display: grid;
    grid-template-areas: "name name" "price btn";
    grid-template-rows: 1fr 1fr;
    align-items: center;
    flex: 1;
  }

  .item-name {
    grid-area: name;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2rem;
  }

  .item-price {
    grid-area: price;
  }

  button {
    grid-area: btn;
  }
`;

export default CartItemWrapper;
