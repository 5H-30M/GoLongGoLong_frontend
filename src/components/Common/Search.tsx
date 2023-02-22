import styled from "styled-components";
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

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
        height: 27px;
        width: 24px;
    }
`;
const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 9px;
    gap: 10px;
    border: 0.5px solid #b2b2b2;
    border-radius: 2px;
    width: 450px;
    height: 38px;
`;
const Input = styled.input`
    width: 100%;
    font-size: 15px;
    border: none;
    &:focus {
        outline: none;
    }
`;
