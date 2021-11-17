import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import SEO from '../src/components/SEO';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body, button, input {
    font: 400 1.6rem sans-serif;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

type CustomAppProps = AppProps & {
  cartListCookie: string;
}

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <GlobalStyle />
      <SEO />
      <Component {...pageProps} />
    </>
  );
}
