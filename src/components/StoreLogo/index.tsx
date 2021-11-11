import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from '../Link';

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  a {
    font-size: 0;

    & > img:first-child {
      width: 10rem;
      display: none;
  
      @media(min-width: 500px) {
        display: block;
      }
    }
  
    & > img:last-child {
      width: 3rem;
      height: 3rem;
  
      @media(min-width: 500px) {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
`;

export default function StoreLogo() {
  const { storeType } = useContext(ThemeContext);
  
  return (
    <LogoWrapper>
      <Link href="/">
        <img src="/images/logo.svg" alt="PokeStore" />
        <img src={`/images/${storeType}.svg`} alt="PokeType" />
      </Link>
    </LogoWrapper>
  );
}