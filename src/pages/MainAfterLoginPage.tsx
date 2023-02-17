import styled from "styled-components";
import Search from "components/Search";
import Slider from "components/Slider";
import Board from "components/Board";

const MainAfterLoginPage = () => {
    return (
        <Container>
            <Slider />
            <InnerContainer>
                <Search />
                <Board />
            </InnerContainer>
        </Container>
    );
};

export default MainAfterLoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
`;
const InnerContainer = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
