import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { testTheme } from '../../../test/test-utils';
import { UserCartContext } from '../../contexts/UserCartContext';
import CartItem from './CartItem';

const testProduct = {
  id: 'id',
  name: 'testProduct',
  img: 'img',
  price: '20',
}

const removeItemFunction = jest.fn();

const Wrapper: FC = ({ children }) => (
  <ThemeProvider theme={testTheme}>
    <UserCartContext.Provider value={{
      removeItem: removeItemFunction,
    } as any}>
      {children}
    </UserCartContext.Provider>
  </ThemeProvider>
);

describe('<CartItem />', () => {
  let cartItem: ReactNode;
  beforeEach(() => {
    cartItem = render(
      <CartItem
        product={testProduct}
        index={1}
      />,
      { wrapper: Wrapper }
    );
  });

  it('should match the snapshot', () => {
    expect(cartItem).toMatchSnapshot();
  });

  describe('when the remove button is clicked', () => {
    it('should execute the remove item function', () => {
      const removeBtn = screen.getByLabelText('Remover item do carrinho');
      userEvent.click(removeBtn);
      expect(removeItemFunction).toBeCalled();
      expect(removeItemFunction).toBeCalledWith(1);
    });
  });
});
