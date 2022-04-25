import styled from "styled-components";
import DishType from "../types/dishType";
const Wrapper = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  gap: 2px;
`;

const Info = styled.div`
  width: 100%;
  height: 30vh;
  background-color: #f7e0b2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
const Picture = styled.img`
  width: 100%;
  height: 20vh;
`;

const Headline = styled.header`
  font-size: 30px;
  font-family: HelveticaNeue;
  @media only screen and (min-width: 650px) {
  }
`;
const Head = styled.header`
  font-size: 15px;
  font-family: HelveticaNeue;
  @media only screen and (min-width: 650px) {
  }
`;
const Label = styled.label`
  font-size: 18px;
  font-family: HelveticaNeue-thin;
  text-align: center;
  @media only screen and (min-width: 650px) {
  }
`;
const Price = styled.label`
  font-size: 20px;
  font-family: HelveticaNeue;
  text-align: center;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 650px) {
  }
`;
const DishCard: React.FC<{ data: DishType }> = (props) => {
  const dish = props.data;
  return (
    <Wrapper>
      <Head>Restaurant</Head>
      <Picture src={dish.picture} alt={dish.name} />
      <Info>
        <Container>
          <Headline>{dish.name}</Headline>
          <Label>{dish.ingredients[0]}</Label>
        </Container>
        <Price>{dish.price}</Price>
      </Info>
    </Wrapper>
  );
};
export default DishCard;
