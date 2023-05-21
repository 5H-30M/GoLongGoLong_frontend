import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";

export const Container = styled(Column)`
    width: 134px;
    justify-content: center;
    align-items: center;

    padding: 16px 0;
    gap: 25px;

    font-size: 19px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    background-color: #ffffff;

    position: absolute;
    top: 40px;
    left: 0;
`;
export const Wrapper = styled(Row)`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    font-size: 25px;
`;
