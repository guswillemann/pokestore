import styled, { css } from 'styled-components';
import { getThemeColor } from '../../theme/utils';
import Button from '../Button';

const UserCartWrapper = styled.aside<{ isVisible: boolean }>`
  display: grid;
  grid-template-rows: auto 1fr 3rem 5rem;
  gap: 1rem;

  padding: 1rem;
  background-color: ${getThemeColor('secondary')};
  border: 2px solid ${getThemeColor('primary')};

  position: fixed;
  inset: 7.2rem 1rem 1rem 1rem;
  transition: opacity 500ms;
  max-width: 30rem;
  margin-left: auto;

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
    color: white;
    font-size: 3rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .total-price {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }
`;

export const CheckoutButton = styled(Button)`
  height: 100%;
`;

export default UserCartWrapper;
