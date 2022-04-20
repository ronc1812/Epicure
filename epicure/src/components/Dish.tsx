import DishContent from "./DishContent";
import Popup from "reactjs-popup";
import DishType from "../types/dishType";
import styled from "styled-components";
const Button = styled.button`
  background-color: #ffffff;
  border: 0;
`;
const Picture = styled.img`
  width: 60vw;
  @media only screen and (min-width: 650px) {
    width: 22vw;
  }
`;
const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
`;

const Dish: React.FC<{ dish: DishType }> = (props) => {
  return (
    <>
      <div>
        <Popup
          modal={true}
          trigger={
            <Button>
              <Picture src={props.dish.picture} alt={props.dish.name} />
            </Button>
          }
        >
          {(close: () => void) => (
            <Wrapper>
              <DishContent dish={props.dish} close={close} />
            </Wrapper>
          )}
        </Popup>
      </div>
    </>
  );
};
export default Dish;
