import Board from "components/Board/Board";
import Search from "components/Search/Search";
import { Banner, InnerContainer, Container } from "./Style";

const Epilogue = () => {
    return (
        <Container>
            <Banner />
            <InnerContainer>
                <Search />
                <Board kindOfCard={"epilogue"} />
            </InnerContainer>
        </Container>
    );
};

export default Epilogue;
