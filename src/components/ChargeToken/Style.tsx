import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";

export const Box = styled(Column)`
    width: 48%;
    align-items: center;

    gap: 40px;
    padding: 42px 33px;

    border: 3px solid #f1f3f5;

    input {
        border: none;
        outline: none;
        font-size: 20px;
    }
`;
export const TitleTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 107px;
    padding: 5px;

    background-color: #f1f3f5;
    border-radius: 12px;

    font-size: 21px;
    font-weight: bold;
`;
export const SpaceBetween = styled(Row)`
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
`;
export const Thinline = styled.div`
    background-color: #f1f3f5;
    width: 100%;
    height: 3px;
`;
const Button = styled.div`
    width: 150px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    cursor: pointer;
`;
export const KakaoButton = styled(Button)`
    background-color: #fae100;
`;
export const CardsButton = styled(Button)`
    background-color: #0064ff;
    color: #ffffff;
`;
