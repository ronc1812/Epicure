import { useState } from "react";
import searchIcon from "../images/search-icon.png";
import SearchContent from "../searchContent/SearchContent";
import {
  Picture,
  Div,
  Search,
  StyledDiv,
  HeaderInput,
  HeaderSearch,
  Wrap,
  Wrapper,
  Input,
} from "./style";
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
