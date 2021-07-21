import { render, screen } from '../../../test/test-utils';
import CheckoutSuccessfulModal from './CheckoutSuccessfulModal';

describe('<CheckoutSuccessfulModal />', () => {
  it('should mathc the snapshot', () => {
    render(<CheckoutSuccessfulModal CheckoutTotalPrice={'100'} />)
    const modal = screen.getByTestId('checkout-modal');
    expect(modal).toMatchSnapshot();
  });
});