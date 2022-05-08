import DishContent from "../dishContent/DishContent";
import { Button, Wrapper, StyledPopup } from "./style";
import DishType from "../../types/dishType";
import DishCard from "../dishCard/DishCard";

const Dish: React.FC<{ dish: DishType }> = (props) => {
  const { dish } = props;
  return (
    <>
      <div>
        <StyledPopup
          modal={true}
          trigger={
            <Button>
              <DishCard data={props.dish} />
            </Button>
          }
        >
          {(close: () => void) => (
            <Wrapper>
              <DishContent dish={dish} close={close} />
            </Wrapper>
          )}
        </StyledPopup>
      </div>
    </>
  );
};
export default Dish;
