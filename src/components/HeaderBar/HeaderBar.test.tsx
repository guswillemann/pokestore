import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test/test-utils';
import HeaderBar from '.';

describe('<HeaderBar />', () => {
  it('should render the search input', () => {
    render(<HeaderBar filterProducts={jest.fn()} storeType={'storeType'} />)
    const searchBar = screen.getByPlaceholderText('pesquisar...');
    expect(searchBar).toBeInTheDocument();
  });
  
  it('should render the cart toggle button', () => {
    render(<HeaderBar filterProducts={jest.fn()} storeType={'storeType'} />)
    const cartToggle = screen.getByAltText('Carrinho');
    expect(cartToggle).toBeInTheDocument();
  });
  
  describe('when a search argument is inserted', () => {
    describe('with 2 characters', () => {
      it('should call the filter function 2 times', () => {
        const filterFunction = jest.fn();
        render(<HeaderBar filterProducts={filterFunction} storeType={'storeType'} />)
        
        const searchBar = screen.getByPlaceholderText('pesquisar...');
        userEvent.type(searchBar, '12');
        expect(filterFunction).toBeCalledTimes(2);
      });
    });
    
    describe('with 4 characters', () => {
      it('should call the filter function 4 times', () => {
        const filterFunction = jest.fn();
        render(<HeaderBar filterProducts={filterFunction} storeType={'storeType'} />)
        
        const searchBar = screen.getByPlaceholderText('pesquisar...');
        userEvent.type(searchBar, '1234');
        expect(filterFunction).toBeCalledTimes(4);
      });
    });
  });
});
