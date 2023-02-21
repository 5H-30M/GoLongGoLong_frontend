import styled from "styled-components";
import img1 from "../assets/imgs/test/1.jpg";

const Author = () => {
    return (
        <Container>
            <Box>
                <Img src={img1}></Img>
                <Info>
                    <Text fontSize="12">구조자</Text>
                    <Text fontSize="17">냥냥아</Text>
                </Info>
            </Box>
            <Text fontSize="12px">모금기간 : 2022.06.29 ~ 2022.07.27</Text>
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
`;
const Img = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Text = styled.text`
    font-size: ${(props) => props.fontSize}px;
`;
