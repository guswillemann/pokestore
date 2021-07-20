import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import nookies from 'nookies';
import useToast from './ToastContext';

export type ProductType = {
  id: string;
  name: string;
  price: string;
  img: string;
}

type UserCartContextTypes = {
  cartList: Array<ProductType>;
  addToCart: (product: ProductType) => void;
  resetCart: () => void;
  toggleCart: () => void;
  removeItem: (index: number) => void;
  isCartVisible: boolean;
}

const UserCartContext = createContext({} as UserCartContextTypes);

type UserCartProviderProps = {
  children: ReactNode;
  cartListCookie: string;
  avaibleProducts: Array<ProductType>;
}

export const CART_LIST_COOKIE = 'CART_LIST_COOKIE';

export function UserCartProvider({ children, cartListCookie, avaibleProducts }: UserCartProviderProps) {
  const { activeToast } = useToast();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartList, setCartList] = useState<Array<ProductType>>(() => {
    if (cartListCookie) {
      const cookieCartItems = cartListCookie.split(',');
      return avaibleProducts.filter((product) => cookieCartItems.some((cartItem) => {
        return product.id === cartItem;
      }));
    }
    return [];
  });

  useEffect(() => {
    if (cartList.length === 0) {
      nookies.destroy(null, CART_LIST_COOKIE);
      return;
    }

    const cartIdList = cartList.reduce((list, item) => [...list, item.id], [] as string[]);
    
    nookies.set(null, CART_LIST_COOKIE, cartIdList.toString(), { path: '/' })
  }, [cartList]);
  
  function addToCart(product: ProductType) {
    const hasProduct = cartList.some((cartItem) => product.id === cartItem.id)
    if (!hasProduct) {
      const newCartList = [...cartList, product];
      setCartList(newCartList);
      return
    }

    activeToast({
      message: 'Você já possui este item no carrinho',
      type: 'alert',
    })
  }

  function resetCart() {
    setCartList([]);
  }

  function toggleCart() {
    setIsCartVisible(!isCartVisible);
  }

  function removeItem(index: number) {
    const newCartList = [...cartList];
    newCartList.splice(index, 1);
    setCartList(newCartList);
  }

  return (
    <UserCartContext.Provider value={{
      cartList,
      addToCart,
      resetCart,
      toggleCart,
      removeItem,
      isCartVisible,
    }}>
      {children}
    </UserCartContext.Provider>
  );
}

export default function useUserCart() {
  return useContext(UserCartContext);
};
