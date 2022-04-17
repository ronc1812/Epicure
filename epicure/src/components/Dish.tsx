import DishContent from "./DishContent";
import Popup from "reactjs-popup";
import DishType from "../types/dishType";
const Dish: React.FC<{ dish: DishType }> = (props) => {
  return (
    <>
      <div>
        <Popup
          modal={true}
          trigger={
            <button>
              <img src={props.dish.picture} alt={props.dish.name} />
              open modal
            </button>
          }
        >
          {(close: () => void) => (
            <DishContent dish={props.dish} close={close} />
          )}
        </Popup>
      </div>
    </>
  );
};
export default Dish;
