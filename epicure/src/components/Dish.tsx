import DishContent from "./DishContent";
import Popup from "reactjs-popup";
import DishType from "../types/dishType";
import styled from "styled-components";
const Picture = styled.button`
  @media (max-width: 768px) {
    background-color: #ffffff;
    border: 0;
    margin-left: -5px;
  }
`;
const Wrapper = styled.div`
  @media (max-width: 768px) {
    background-color: #ffffff;
    width: 100%;
    height: 844px;
  }
`;
const Dish: React.FC<{ dish: DishType }> = (props) => {
  return (
    <>
      <div>
        <Popup
          modal={true}
          trigger={
            <Picture>
              <img src={props.dish.picture} alt={props.dish.name} />
            </Picture>
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
