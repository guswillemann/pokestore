import styled from 'styled-components';
import ProductCard, { ProductType } from './ProductCard';

const ProductsListWrapper = styled.ul`
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;

  grid-template-columns: repeat(1, 1fr);
    
  @media(min-width: 300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media(min-width: 1000px) {
    margin-right: 31rem;
  }
  
  @media(min-width: 1150px) {
    grid-template-columns: repeat(5, 1fr);
  }
  
  @media(min-width: 1300px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

type ProductListProps = {
  products: Array<ProductType>
}

export default function ProductsList({ products }: ProductListProps) {
  return(
    <ProductsListWrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsListWrapper>
  );  
}
