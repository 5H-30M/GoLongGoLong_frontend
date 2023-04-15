import { Container, InnerContainer } from "./Style";
import Search from "components/Search/Search";
import Slider from "components/Slider/Slider";
import Board from "components/Board/Board";
import SelectBoard from "components/SelectBoard/SelectBoard";

const MainAfterLogin = () => {
    return (
        <Container>
            <Slider />
            <InnerContainer>
                <Search />
                <SelectBoard kindOfCard={"donation"} />
                <Board kindOfCard={"donation"} />
            </InnerContainer>
        </Container>
    );
};

export default MainAfterLogin;
