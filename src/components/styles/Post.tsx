import styled from "styled-components";

const Container = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;

    text {
        font-size: 16px;
        padding-bottom: 30px;
        color: #444444;
        line-height: 180%;
    }
    img {
        width: 100%;
        height: 390px;
        object-fit: cover;
    }
    .title {
        font-size: 30px;
        font-weight: bold;
    }
`;
const Line = styled.div`
    width: 100%;
    height: 6px;
    background: #444444;
    margin-top: 100px;
`;

export { Container, Line };
