import useUserCart, { ProductType } from '../../../contexts/UserCartContext';
import Button from '../../Button';
import ProductImage from '../../ProductImage';
import CartItemWrapper from './styles';

type CartItemPropsTypes = {
  product: ProductType;
  index: number;
}

export default function CartItem({ product, index }: CartItemPropsTypes) {
  const { removeItem } = useUserCart();

  return (
    <CartItemWrapper data-testid="cart-item">
      <ProductImage src={product.img} />
      <div className="item-info">
        <p className="item-name">{product.name}</p>
        <p className="item-price">{`$${product.price}`}</p>
        <Button
          type="button"
          onClick={() => removeItem(index)}
          aria-label="Remove item from cart"
        >
          remove
        </Button>
      </div>
    </CartItemWrapper>
  );
}
