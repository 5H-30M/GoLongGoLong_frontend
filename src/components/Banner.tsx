import styled from "styled-components";
import img1 from "../assets/imgs/test/5.jpg";

const Banner = () => {
    return (
        <Container>
            <img src={img1}></img>
            <TextBox>
                <Text fontSize="40">천천히 조금씩 조금씩~</Text>
                <Text fontSize="12">by 행복한고양이</Text>
            </TextBox>
        </Container>
    );
};

export default Banner;

const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`;
const TextBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`;
const Text = styled.text`
    font-size: ${(props) => props.fontSize}px;
    color: #ffffff;
    font-weight: bold;
`;
