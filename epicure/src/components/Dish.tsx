import DishContent from "./DishContent";
import Popup from "reactjs-popup";
import DishType from "../types/dishType";
import styled from "styled-components";
import DishCard from "./DishCard";
const Button = styled.button`
  background-color: #ffffff;
  border: 0;
  padding: 8px 1px;
`;
const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 500vh;
  @media (min-width: 769px) {
    background-color: rgba(0, 0, 3, 0.5);
  }
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
          contentStyle={{ width: "100%" }}
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
