import { useState } from "react";
import styled from "styled-components";
const Header = styled.header`
  font-family: HelveticaNeue-Thin;
  font-size: 17px;
  border-bottom: 1px solid orange;
  text-align: center;
  margin: 5% 30%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  gap: 10px;
`;
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
