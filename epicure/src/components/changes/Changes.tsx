import React from "react";
import { Wrapper, Header } from "./style";

const Changes: React.FC<{ changes: string[] }> = (props) => {
  const { changes } = props;
  return (
    <div>
      <Header>Changes</Header>
      <Wrapper>
        {changes.map((change) => {
          return (
            <div key={change}>
              <input type="checkbox" value={change} key={change} />
              {change}
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};
export default Changes;
