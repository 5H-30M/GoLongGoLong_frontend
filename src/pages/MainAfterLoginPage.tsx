import styled from "styled-components";
import Search from "components/Common/Search";
import Slider from "components/MainAfterLoginPage/Slider";
import Board from "components/MainAfterLoginPage/Board";

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
    width: 1040px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;
