import ProductImageWrapper from './styles';

type ProducImageProps = {
  src: string;
}

export default function ProductImage({ src }: ProducImageProps) {
  return (
    <ProductImageWrapper data={src}>
      <img src="/images/pokeball.svg" alt="PokeBall" />
    </ProductImageWrapper>
  );
}
