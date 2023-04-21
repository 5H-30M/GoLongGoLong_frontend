import styled from "styled-components";

const Container = styled.div`
    width: 49vw;
    display: flex;
    flex-direction: column;
    gap: 30px;

    word-break: break-all;

    line-height: 180%;
    color: #444444;

    img {
        width: 100%;
        height: 390px;
        object-fit: cover;
    }
    h1,
    .title {
        font-size: 30px;
        font-weight: bold;
    }
    h1,
    h2,
    p,
    img {
        padding: 10px 0;
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
