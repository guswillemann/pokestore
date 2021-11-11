import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  width: clamp(0vw, 20rem, 100vw);
  margin-bottom: 2rem;

  & > img:first-child {
  }

  & > img:last-child {
    position: absolute;
    top: 0;
    right: 0;

    width: 30%;
  }
`;

export default function HomeLogo() {
  return (
    <LogoWrapper>
      <img src="/images/logo.svg" alt="PokeStore" />
      <img src="/images/pokeball.svg" alt="Pokeball" />
    </LogoWrapper>
  );
}