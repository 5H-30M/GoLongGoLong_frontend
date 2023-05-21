import { StyledButton } from "components/Common/ButtonStyle";
import { Column, Row } from "components/Common/DivStyle";
import styled from "styled-components";

export const Container = styled(Column)`
    width: 49vw;
    text {
        font-size: 14px;
    }
`;
export const GreyDiv = styled(Row)`
    width: 100%;
    padding: 14px;

    background-color: #f7f8f9;
    border-radius: 5px;

    font-size: 13px;

    input {
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        padding: 5px;

        border: none;
        outline: none;
    }
`;

export const Button = styled(StyledButton)`
    width: 71px;
    padding: 10px;

    border-radius: 5px;
    background-color: #999999;
    color: #ffffff;
    font-size: 15px;
`;
