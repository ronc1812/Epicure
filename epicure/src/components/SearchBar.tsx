import { useState } from "react";
import searchIcon from "../images/search-icon.png";
import SearchContent from "./SearchContent";
import styled from "styled-components";

const Search = styled.div`
  width: 45%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4vh;
  font-size: 13px;
`;

const Wrapper = styled.div`
  width: 65%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vh;
  font-size: 13px;
  @media only screen and (min-width: 650px) {
    width: 50%;
    height: 6vh;
    font-size: 23px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeaderSearch = styled(Wrap)`
  justify-content: flex-end;
  width: 130%;
`;
const Input = styled.input`
  background-color: inherit;
  border: 0;
  width: 100%;
  font-size: inherit;
  font-family: HelveticaNeue-Thin;
  :focus {
    outline: none;
  }
  @media only screen and (min-width: 650px) {
    font-size: inherit;
    text-align: center;
    width: 70%;
  }
`;

const HeaderInput = styled(Input)`
  @media only screen and (min-width: 650px) {
    font-size: inherit;
    text-align: start;
    width: 100%;
  }
`;
const StyledDiv = styled.div`
  width: "35vw";
  display: "flex";
  justify-content: "flex-start";
`;
const Div = styled.div`
  width: "23vw";
  display: "flex";
  justify-content: "flex-start";
`;
const Picture = styled.img``;
const SearchBar: React.FC<{ header: boolean }> = (props) => {
  const { header } = props;
  const [input, setInput] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const search = async (event: any) => {
    setInput(event.target.value);
    if (event.target.value.trim() === "") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return header ? (
    <Wrap>
      <Wrapper>
        <Picture src={searchIcon} alt="" />
        <Input
          type="text"
          onChange={search}
          placeholder="Search for restaurant cuisine, chef"
        />
      </Wrapper>
      <StyledDiv>{visible && <SearchContent query={input} />}</StyledDiv>
    </Wrap>
  ) : (
    <>
      <HeaderSearch>
        <Search>
          <HeaderInput
            type="text"
            onChange={search}
            placeholder="Search for restaurant cuisine, chef"
          />
          <Picture src={searchIcon} alt="" />
        </Search>
        <Div>{visible && <SearchContent query={input} />}</Div>
      </HeaderSearch>
    </>
  );
};
export default SearchBar;
