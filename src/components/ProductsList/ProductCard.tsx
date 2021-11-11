import styled from 'styled-components';
import useUserCart, { ProductType as tempType} from '../../contexts/UserCartContext';
import { getThemeColor } from '../../theme/utils';

export type ProductType = tempType;

const ProductCardWrapper = styled.li`
  &::before {
    content: '';
    padding-top: 100%;
  }

  display: flex;
  position: relative;
  flex-direction: column;

  background-color: ${getThemeColor('backgroundAlt')};
  border-radius: ${({ theme }) => theme.borderRadius};

  overflow: hidden;

  button {
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    padding: 1rem;
    transition: ease-in-out 300ms width;
  }

  .text-container {
    display: none;
    width: 100%;

    .add-product {
      background-color: ${getThemeColor('primary')};
      color: white;
    }
  }

  &:hover {
    img {
      width: 60%;
      margin: auto;
    }

    .text-container {
      display: initial;

      .product-name, .product-name + p {
        text-align: initial;
        margin-bottom: 0.5rem;
        margin-left: 2rem;
      }

      .product-name::first-letter {
        text-transform: uppercase;
      }

      .add-product {
        padding: 1% 0;
      }
    }
  }
`;

export default function ProductCard({ product }: { product: ProductType }) {
  const { addToCart } = useUserCart();

  return (
    <ProductCardWrapper>
      <button onClick={() => addToCart(product)}>
        <img src={product.img} alt="Imagem do Pokemon" />
        <div className="text-container">
          <p className="product-name">{product.name}</p>
          <p>{`R$ ${product.price}`}</p>
          <p className="add-product">add +</p>      
        </div>
      </button>
    </ProductCardWrapper>
  );
}
