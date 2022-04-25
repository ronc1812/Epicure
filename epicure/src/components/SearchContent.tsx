import { useEffect, useState } from "react";
import styled from "styled-components";
import getSearchResults from "../services/getSearchResults";
const Wrapper = styled.div`
  width: 50%;
  background-color: inherit;
`;

const Result = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: white;
`;
const Header = styled.header`
  color: rgba(0, 0, 0, 0.35);
  font-size: 15px;
`;
const SearchContent: React.FC<{ query: string }> = (props) => {
  const [info, setInfo] = useState(getSearchResults(props.query.toLowerCase()));
  useEffect(() => {
    setInfo(getSearchResults(props.query.toLowerCase()));
  }, []);
  return (
    <Wrapper>
      {info[0].length !== 0 ? (
        <Result>
          <Header>Restaurants :</Header>
          {info[0]?.map((res) => {
            return <Header key={res}>{res}</Header>;
          })}
        </Result>
      ) : (
        <></>
      )}

      {info[1].length !== 0 ? (
        <Result>
          <Header>Chefs : </Header>
          {info[1]?.map((chef) => {
            return <Header key={chef}>{chef}</Header>;
          })}
        </Result>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
export default SearchContent;
