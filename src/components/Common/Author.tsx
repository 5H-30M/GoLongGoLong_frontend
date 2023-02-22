import styled from "styled-components";
import img1 from "../../assets/imgs/test/1.jpg";

const Author = () => {
    return (
        <Container>
            <Box>
                <img src={img1}></img>
                <Info>
                    <text className="small">구조자</text>
                    <text className="medium">냥냥아</text>
                </Info>
            </Box>
            <text className="small">모금기간 : 2022.06.29 ~ 2022.07.27</text>
        </Container>
    );
};

export default Author;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    justify-content: flex-start;
    gap: 10px;
`;
const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    img {
        height: 70px;
        width: 70px;
        object-fit: cover;
    }
    .small {
        font-size: 12px;
    }
    .medium {
        font-size: 17px;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
