import styled from 'styled-components';
import { getThemeColor } from '../../../theme/utils';

const ProductCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 6px 0 ${getThemeColor('secondary')};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  & > object {
    transition: transform 300ms ease-in-out;
    
    img {
      transform: scale(0.4);
    }
  }

  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-items: center;
  }

  .product-name {
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1.5em;
    padding: 0 1rem;
  }

  &:hover > object {
    transform: scale(1.05);
  }
`;

export default ProductCardWrapper;
