import Board from "components/Board/Board";
import Search from "components/Search/Search";
import { Banner, InnerContainer, Container } from "./Style";
import SelectBoard from "components/SelectBoard/SelectBoard";

const Epilogue = () => {
    return (
        <Container>
            <Banner />
            <InnerContainer>
                <Search />
                <SelectBoard kindOfCard={"epilogue"} />
                <Board kindOfCard={"epilogue"} />
            </InnerContainer>
        </Container>
    );
};

export default Epilogue;
