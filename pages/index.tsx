import Head from 'next/head';
import styled from 'styled-components';
import HomeLogo from '../src/components/HomeLogo';

const HomeWrapper = styled.main`
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

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/pokeball.svg" type="imagem/svg+xml" />
        <title>PokeStore</title>
      </Head>
      <HomeWrapper>
        <h1>Acesse uma</h1>
        <HomeLogo />
        <ul>
          <a href="/fire">
            <li className="fire-store">
              <img src="/images/fire.svg" alt="fire Store" />
              <p>fire</p>
            </li>
          </a>
          <a href="/grass">
            <li className="grass-store">
              <img src="/images/grass.svg" alt="Grass Store" />
              <p>grass</p>
            </li>
          </a>
          <a href="/rock">
            <li className="rock-store">
              <img src="/images/rock.svg" alt="Rock Store" />
              <p>rock</p>
            </li>
          </a>
          <a href="/water">
            <li className="water-store">
              <img src="/images/water.svg" alt="Water Store" />
              <p>water</p>
            </li>
          </a>
        </ul>
      </HomeWrapper>
    </>
  );
}