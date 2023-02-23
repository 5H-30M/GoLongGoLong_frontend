import styled from "styled-components";

const Container = styled.div`
    width: 750px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    text {
        font-size: 16px;
        color: #444444;
        line-height: 180%;
    }
    img {
        width: 100%;
        height: 390px;
        object-fit: contain;
    }
    .title {
        font-size: 30px;
        font-weight: bold;
    }
`;
const Line = styled.div`
    width: 100%;
    height: 6px;
    background-color: #444444;
    margin-top: 100px;
`;
const ThinLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
`;

export { Container, Line, ThinLine };
