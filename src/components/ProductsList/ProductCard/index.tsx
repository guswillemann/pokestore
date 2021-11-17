import useUserCart, { ProductType as tempType } from '../../../contexts/UserCartContext';
import Button from '../../Button';
import ProductImage from '../../ProductImage';
import ProductCardWrapper from './styles';

export type ProductType = tempType;

export default function ProductCard({ product }: { product: ProductType }) {
  const { addToCart } = useUserCart();

  const handleClick = () => addToCart(product);

  return (
    <ProductCardWrapper>
      <ProductImage src={product.img} />
      <div>
        <p className="product-name">{product.name.replace('-', ' ')}</p>
        <div className="footer">
          <p>{`R$ ${product.price}`}</p>
          <Button onClick={handleClick}>
            ADD
          </Button>
        </div>
      </div>
    </ProductCardWrapper>
  );
}
