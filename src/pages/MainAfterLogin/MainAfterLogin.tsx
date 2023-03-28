import { Container, InnerContainer } from "./Style";
import Search from "components/Search/Search";
import Slider from "components/Slider/Slider";
import Board from "components/Board/Board";
import FilterMenu from "components/FilterMenu/FilterMenu";

const MainAfterLogin = () => {
    return (
        <Container>
            <Slider />
            <InnerContainer>
                <Search />
                <FilterMenu />
                <Board kindOfCard={"donation"} />
            </InnerContainer>
        </Container>
    );
};

export default MainAfterLogin;
