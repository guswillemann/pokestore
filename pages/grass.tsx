import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { CART_LIST_COOKIE, ProductType } from '../src/contexts/UserCartContext';
import StoreScreen from '../src/screens/StoreScreen';

const storeType = 'grass';

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

export default function StorePage({ products, cartListCookie }: any) {
  return (
    <StoreScreen
      products={products}
      cartListCookie={cartListCookie}
      storeType={storeType}
      theme={theme}
    />
  );
}

type PokemonType = {
  pokemon: {
    name: string;
    url: string;
  };
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products = await fetch(`https://pokeapi.co/api/v2/type/${storeType}`)
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
