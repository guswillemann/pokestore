import { GetServerSideProps } from 'next';
import Head from 'next/head';
import nookies from 'nookies';
import { useState } from 'react';
import styled from 'styled-components';
import HeaderBar from '../src/components/HeaderBar';
import ProductsList from '../src/components/ProductsList';
import UserCart from '../src/components/UserCart';
import { CART_LIST_COOKIE, UserCartProvider } from '../src/contexts/UserCartContext';

const HomePageWrapper = styled.div`
  width: 100%;
`;

export default function Home({ products, cartListCookie }: any) {
  const [porductsOnDisplay, setProductsOnDisplay] = useState(products);

  function filterProducts(filter: string) {
    const filterRegExp = new RegExp(filter, 'i');
    const newProductsDisplay = products.filter((product: any) => filterRegExp.test(product.name));
    setProductsOnDisplay(newProductsDisplay);
  }

  return (
    <UserCartProvider
      avaibleProducts={products}
      cartListCookie={cartListCookie}
    >
      <HomePageWrapper>
        <Head>
          <link rel="shortcut icon" href="/images/grass.svg" type="imagem/svg+xml" />
          <title>Grama | PokeStore</title>
        </Head>
        <HeaderBar filterProducts={filterProducts} />
        <UserCart />
        <ProductsList products={porductsOnDisplay} />
      </HomePageWrapper>
    </UserCartProvider>
  );
}

export type ProductType = {
  id: string;
  name: string;
  price: string;
  img: string;
}

type PokemonType = {
  pokemon: {
    name: string;
    url: string;
  };
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products = await fetch('https://pokeapi.co/api/v2/type/grass')
  .then((res) => res.json())
    .then((resJson) => resJson.pokemon.reduce((productList: Array<ProductType>, currentProduct: PokemonType) => {
      const id = currentProduct.pokemon.url.match(/(?<=\/)\d+/)?.[0];

      return [
        ...productList,
        {
          id,
          price: (Math.random() * 100).toFixed(2),
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          name: currentProduct.pokemon.name,
        }
      ]
    }, []));
  
  const cartListCookie = nookies.get(ctx)[CART_LIST_COOKIE];

  return {
    props: {
      products,
      cartListCookie: cartListCookie || null,
    }
  }
}
