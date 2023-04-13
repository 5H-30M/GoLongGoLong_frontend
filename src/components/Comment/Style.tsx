import { Column, Row } from "components/Common/DivStyle";
import styled from "styled-components";

const Container = styled(Column)`
    width: 49vw;
    text {
        font-size: 14px;
    }
`;
const GreyDiv = styled(Row)`
    width: 100%;
    padding: 14px;

    background-color: #f7f8f9;
    border-radius: 5px;

    font-size: 13px;

    input {
        background-color: transparent;
        border: none;
        height: 100%;
        weight: 100%;

        &focused {
            border: none;
        }
    }
`;

export { Container, GreyDiv };
