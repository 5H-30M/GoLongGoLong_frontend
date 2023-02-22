import styled from "styled-components";

const Container = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.text`
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
`;
const Text = styled.text`
    font-size: 16px;
    padding-bottom: 30px;
    line-height: 188%;
    color: #444444;
`;
const Img = styled.img`
    width: 100%;
    height: 390px;
    object-fit: cover;
`;
const Line = styled.div`
    width: 100%;
    height: 6px;
    background: #444444;
    margin-top: 100px;
`;

export { Container, Title, Text, Img, Line };
