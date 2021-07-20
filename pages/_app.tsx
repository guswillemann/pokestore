import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ModalProvider } from '../src/contexts/ModalContext';
import { ToastProvider } from '../src/contexts/ToastContext';

const theme = {
  borderRadius: '8px',
  colors: {
    primary: 'darkgreen',
    secondary: 'lightgreen',
    background: '#FAFAFA',
    backgroundAlt: '#F3F3F3',
    success: 'green',
    alert: 'yellow',
    danger: 'red',
  },
}

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

  body {
    background-color: ${theme.colors.background};
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

type CustomAppProps = AppPropsType & {
  cartListCookie: string;
}

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}
