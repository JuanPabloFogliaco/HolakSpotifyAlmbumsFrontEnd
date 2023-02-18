import { FiSearch } from "react-icons/fi";
import { Search, WrapperSearch } from "./style";

const SearchComponent = () => {
  return (
    <WrapperSearch>
      <FiSearch style={{left: "45px", position: "relative"}} size={"30px"} color={"black"} />
      <Search placeholder="¿Que te apetece escuchar?" />
    </WrapperSearch>
  );
};

export default SearchComponent;
