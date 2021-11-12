import useUserCart, { ProductType as tempType } from '../../../contexts/UserCartContext';
import Button from '../../Button';
import ProductCardWrapper from './styles';

export type ProductType = tempType;

export default function ProductCard({ product }: { product: ProductType }) {
  const { addToCart } = useUserCart();

  const handleClick = () => addToCart(product);

  return (
    <ProductCardWrapper>
      <object data={product.img}>
        <img src="/images/pokeball.svg" alt="PokeBall" />
      </object>
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
