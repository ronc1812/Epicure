import React from "react";
import DishType from "../types/dishType";

const DishContent: React.FC<{ dish: DishType; close: () => void }> = (
  props
) => {
  const dish = props.dish;
  return (
    <div>
      <a onClick={props.close}>&times;</a>
      <img src={dish.picture} alt={dish.name} />
      {/* <span>
        <header>choose a side</header>
        {dish.sideOptions.map((option) => {
          return (
            <input type="radio" key={option}>
              {option}
            </input>
          );
        })}
      </span>
      <span>
        <header>changes</header>
        {dish.changes.map((change) => {
          return (
            <input type="radio" key={change}>
              {change}
            </input>
          );
        })}
      </span> */}
    </div>
  );
};

export default DishContent;
