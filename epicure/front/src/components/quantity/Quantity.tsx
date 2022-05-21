import { useState } from "react";
import { Header, Wrapper, Main } from "./style";
const Quantity = () => {
  let [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount(++amount);
  };
  const decrease = () => {
    setAmount(--amount);
  };

  return (
    <Wrapper>
      <Header>Quantity</Header>
      <Main>
        {amount > 1 && <button onClick={decrease}>-</button>}
        <label>{amount}</label>
        <button onClick={increase}>+</button>
      </Main>
    </Wrapper>
  );
};
export default Quantity;
