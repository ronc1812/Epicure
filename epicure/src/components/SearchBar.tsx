import { useState } from "react";
import searchIcon from "../images/search-icon.png";
import SearchContent from "./SearchContent";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  background-color: inherit;
  border: 0;
  width: 100%;
  font-size: 13px;
  font-family: HelveticaNeue-Thin;
  :focus {
    outline: none;
  }
`;
const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const search = async (event: any) => {
    setInput(event.target.value);
    if (event.target.value.trim() === "") {
      setVisible(false);
    }
    setVisible(true);
  };

  return (
    <Wrap>
      <Wrapper>
        <img src={searchIcon} alt="" />
        <Input
          type="text"
          onChange={search}
          placeholder="Search for restaurant cuisine, chef"
        />
      </Wrapper>
      {visible && input && <SearchContent query={input} />}
    </Wrap>
  );
};
export default SearchBar;
