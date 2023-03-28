import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";

const Container = styled(Column)`
    width: 236px;
    margin: 25px 0px;
    gap: 26px;
    position: relative;

    border-bottom: 4px solid #d0d0d0;
    padding-bottom: 15px;
`;
const CardInfo = styled(Column)`
    gap: 13px;

    img {
        height: 134px;
        background-color: #dfdfdf;
        border-radius: 10px;
        object-fit: cover;
    }
    .title {
        font-size: 15px;
    }
    .author {
        font-size: 10px;
        color: #999999;
    }
`;
const Mark = styled(Row)`
    width: 37px;
    height: 20px;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 10px;
    top: 10px;

    font-size: 10px;
    border-radius: 12px;

    background-color: #444444;
    color: #ffffff;
`;

export { Container, CardInfo, Mark };
