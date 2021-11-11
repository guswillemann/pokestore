import styled from 'styled-components';
import useUserCart from '../../contexts/UserCartContext';
import { getThemeColor } from '../../theme/utils';
import StoreLogo from '../StoreLogo';

const HeaderBarWrapper = styled.header`
  width: 100%;
  height: 6.2rem;
  background-color: ${getThemeColor('background')};
  border-bottom: 2px solid ${getThemeColor('primary')};

  margin-bottom: 1rem;
  padding: 0.5rem;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-content: center;
  gap: 2rem;

  z-index: 100;

  form {
    position: relative;
    width: clamp(50%, 50rem, 100%);
    height: 100%;

    .magnifier {
      position: absolute;
      top: 50%;
      left: 0.5rem;

      transform: translateY(-50%);

      width: 3rem;
      height: 3rem;
    }
    
    input {
      width: 100%;
      height: 100%;
      
      padding-left: 4rem;
      border: 2px solid ${getThemeColor('secondary')};
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  button {
    background-color: transparent;
    border: none;
    
    @media(min-width: 1000px) {
      display: none;
    }
  }
`;

type HeaderBarProps = {
  filterProducts: (searchArg: string) => void;
  storeType: string;
}

export default function HeaderBar({ filterProducts }: HeaderBarProps) {
  const { toggleCart } = useUserCart();

  return (
    <HeaderBarWrapper>
      <StoreLogo />
      <form>
        <img className="magnifier" src="/images/magnifier.svg" alt="Lupa" />
        <input
          aria-label="pesquisa de produtos"
          placeholder="pesquisar..."
          onChange={(e) => filterProducts(e.target.value)}
        />
      </form>
      <button type="button" onClick={toggleCart}>
        <img src="/images/cart.svg" alt="Carrinho" />
      </button>
    </HeaderBarWrapper>
  );
}
