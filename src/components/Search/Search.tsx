import { Container, SearchBox, Input } from "./Style";
import search from "../../assets/imgs/search.png";

const Search = () => {
    return (
        <Container>
            <SearchBox>
                <img src={search}></img>
                <Input placeholder="모금글, 구조자를 검색하세요"></Input>
            </SearchBox>
        </Container>
    );
};

export default Search;
