import styled from "styled-components";
import DishType from "../types/dishType";
const Wrapper = styled.div`
  width: 45vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Info = styled.div`
  background-color: #f7e0b2;
  display: flex;
  height: 25vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Picture = styled.img`
  width: 100%;
  height: 15vh;
`;

const Headline = styled.header`
  font-size: 15px;
  font-family: HelveticaNeue;
  margin-top: 20%;
  @media only screen and (min-width: 650px) {
  }
`;
const Label = styled.label`
  font-size: 13px;
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
