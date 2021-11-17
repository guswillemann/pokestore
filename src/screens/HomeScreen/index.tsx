import Head from 'next/head';
import HomeLogo from '../../components/HomeLogo';
import HomeScreenWrapper from './styles';

export default function HomeScreen() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/pokeball.svg" type="imagem/svg+xml" />
        <title>PokéStore</title>
      </Head>
      <HomeScreenWrapper>
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
      </HomeScreenWrapper>
    </>
  );
}