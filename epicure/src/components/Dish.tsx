import DishContent from "./DishContent";
import Popup from "reactjs-popup";
import DishType from "../types/dishType";
import styled from "styled-components";
import DishCard from "./DishCard";
const Button = styled.button`
  background-color: #ffffff;
  border: 0;
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
              <DishCard data={props.dish} />
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
