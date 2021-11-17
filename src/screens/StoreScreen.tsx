import { useState } from 'react';
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import CustomScrollBar from '../components/CusttomScrollBar';
import HeaderBar from '../components/HeaderBar';
import ProductsList from '../components/ProductsList';
import SEO from '../components/SEO';
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
  theme: DefaultTheme;
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
      <CustomScrollBar />
      <ToastProvider>
        <ModalProvider>
          <UserCartProvider
            avaibleProducts={products}
            cartListCookie={cartListCookie}
          >
            <SEO storeType={storeType} />
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
