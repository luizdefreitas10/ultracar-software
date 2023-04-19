import { products } from "../../mocks/Products/Products";
import {
  ProductContainer,
  InsideBox,
  StyledH1,
  ProductsContainer,
  Container,
  StyledContainer
} from '../../styles/Products/styles'

export default function Products() {
  return (
    <Container id='produtos'>
      <StyledH1>Alguns de nossos produtos: </StyledH1>
      <ProductsContainer>
        { products.map((product) => (
          <ProductContainer>
            <img src={product.src} alt={product.name} height={200} width={200}/>
            <InsideBox>
              <h4>{ product.name }</h4>
              <p>R$ { product.price }</p>
            </InsideBox>
          </ProductContainer>
        )) }
      </ProductsContainer>
      <StyledContainer></StyledContainer>
    </Container>
  );
};