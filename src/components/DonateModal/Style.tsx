import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";

export const Container = styled(Column)`
    justify-content: space-between;
    align-items: center;

    width: 353px;
    height: 220px;
    padding: 30px;

    border: 3px solid #f1f3f5;
    border-radius: 5px;

    font-size: 15px;
    background-color: #ffffff;

    position: absolute;
    bottom: -230px;

    input {
        border: none;
        outline: none;
    }
`;
export const Box = styled(Row)`
    width: 214px;
    justify-content: space-between;
    align-items: center;
    .gol {
        font-weight: bold;
        color: #f1b95c;
    }
`;
export const Button = styled.button`
    width: 214px;
    height: 39px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fcf1de;

    border: none;
    border-radius: 5px;

    cursor: pointer;
`;
export const Charge = styled(Row)`
    width: 214px;
    justify-content: flex-end;
    font-size: 12px;
`;
