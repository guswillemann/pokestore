import Head from 'next/head';
import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import HeaderBar from '../components/HeaderBar';
import ProductsList from '../components/ProductsList';
import UserCart from '../components/UserCart';
import { ModalProvider } from '../contexts/ModalContext';
import { ToastProvider } from '../contexts/ToastContext';
import { ProductType, UserCartProvider } from '../contexts/UserCartContext';

const StoreStyle = createGlobalStyle<{ theme: { colors: { background: string }}}>`
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const StoreScreenWrapper = styled.div`
  width: 100%;
`;

type StoreScreenProps = {
  products: Array<ProductType>;
  cartListCookie: string;
  theme: {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      success: string;
      alert: string;
      danger: string;
    }
  }
  storeType: string;
}

export default function StoreScreen({ products, cartListCookie, theme, storeType }: StoreScreenProps) {
  const [porductsOnDisplay, setProductsOnDisplay] = useState(products);

  function filterProducts(filter: string) {
    const filterRegExp = new RegExp(filter, 'i');
    const newProductsDisplay = products.filter((product: any) => filterRegExp.test(product.name));
    setProductsOnDisplay(newProductsDisplay);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <ModalProvider>
          <UserCartProvider
            avaibleProducts={products}
            cartListCookie={cartListCookie}
          >
            <Head>
              <link rel="shortcut icon" href={`/images/${storeType}.png`} type="imagem/svg+xml" />
              <title>{storeType} | PokeStore</title>
            </Head>
            <StoreStyle />
            <StoreScreenWrapper>
              <HeaderBar filterProducts={filterProducts} storeType={storeType} />
              <UserCart />
              <ProductsList products={porductsOnDisplay} />
            </StoreScreenWrapper>
          </UserCartProvider>
        </ModalProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
