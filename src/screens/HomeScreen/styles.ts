import styled from 'styled-components';

const HomeScreenWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    width: clamp(30vw, 50rem, 100vw);
    height: clamp(30vw, 50rem, 100vw);

    gap: 2rem;
    padding: 0 0.5rem;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 100%;

    border-radius: 2.4rem;

    img {
      width: 70%;
    }

    p {
      font-size: 2.8rem;
      font-weight: 700;
      text-transform: capitalize;
      color: white;
    }

    &:hover {
      filter: brightness(0.85);
    }
  }

  .fire-store {
    background-color: red;
  }
  
  .grass-store {
    background-color: green;
  }
  
  .rock-store {
    background-color: orange;
  }
  
  .water-store {
    background-color: blue;
  }
`;

export default HomeScreenWrapper;
