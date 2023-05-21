import { GreyButton } from "components/Common/ButtonStyle";
import { Column, Row } from "components/Common/DivStyle";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    z-index: 9999;

    position: fixed;
    top: 0;
    left: 0;

    transition: opacity 0.3s ease-in-out;
    opacity: 1;
`;
export const Overlay = styled(Column)`
    width: 100%;
    height: 100%;
    background: rgba(96, 96, 96, 0.7);

    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
`;
export const Box = styled(Column)`
    width: 552px;
    padding-top: 50px;
    padding-bottom: 30px;
    padding-left: 37px;
    padding-right: 37px;

    align-items: center;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;

    gap: 50px;
`;
export const TextBox = styled(Row)`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
`;
export const Name = styled.div`
    width: 102px;
`;
export const Content = styled.div`
    width: 318px;
    word-break: break-all;
`;
export const Button = styled(GreyButton)`
    width: 183px;
    height: 39px;
`;
