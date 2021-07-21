import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import UserCart from '.';
import { testTheme } from '../../../test/test-utils';
import { ModalContext } from '../../contexts/ModalContext';
import { ProductType, UserCartContext } from '../../contexts/UserCartContext';

const generateCartList = (itemsAmount: number) => {
  const cartList: Array<ProductType> = [];
  
  for (let i = 0;i<itemsAmount;i++) {
    cartList.push({
      id: i.toString(),
      name: 'testProduct',
      img: 'img',
      price: '20',
    })
  }

  return cartList;
}

const activeModalMock = jest.fn();
const resetCartMock = jest.fn();

function renderUserCart(cartList = generateCartList(1)) {
  const Wrapper: FC = ({ children }) => (
    <ThemeProvider theme={testTheme}>
      <ModalContext.Provider value={{
        activeModal: activeModalMock,
      } as any}>
        <UserCartContext.Provider value={{
          cartList,
          resetCart: resetCartMock,
          isCartVisible: true,
        } as any}>
          {children}
        </UserCartContext.Provider>
      </ModalContext.Provider>
    </ThemeProvider>
  );
  
  return render(<UserCart />, { wrapper: Wrapper });
}

describe('<UserCart />', () => {
  it('should match the snapshot', () => {
    const userCart = renderUserCart();
    expect(userCart).toMatchSnapshot();
  });

  describe('when the finish checkout button is clicked', () => {
    it('should active a modal and reset the cart', () =>{
      renderUserCart();
      const checkoutButton = screen.getByText('Finalizar');
      
      expect(checkoutButton).toBeInTheDocument();
      userEvent.click(checkoutButton);
      
      expect(activeModalMock).toBeCalledTimes(1);
      expect(resetCartMock).toBeCalledTimes(1);
    });
  });

  describe('when the cart list is empty', () => {
    it('should not render any <CartItem />', () => {
      renderUserCart([]);

      const cartItems = screen.queryAllByTestId('cart-item');
      expect(cartItems.length).toEqual(0);
    });
  });

  describe('when the cart list has a single item', () => {
    it('should render a single <CartItem />', () => {
      renderUserCart();

      const cartItems = screen.getAllByTestId('cart-item');
      expect(cartItems.length).toEqual(1);
    });
  });
  
  describe('when the cart list has three items', () => {
    it('should render three <CartItem />', () => {
      renderUserCart(generateCartList(3));

      const cartItems = screen.getAllByTestId('cart-item');
      expect(cartItems.length).toEqual(3);
    });
  });
});
