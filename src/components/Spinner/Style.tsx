import styled from "styled-components";
import pawprint_one from "../../assets/imgs/pawprint_one.png";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 250px;

    justify-content: center;
    align-items: flex-end;

    position: relative;
`;
export interface pawProps {
    top: number;
    left: number;
}
export const PawImg = styled.img.attrs({
    src: `${pawprint_one}`,
})<pawProps>`
    position: absolute;
    width: 35px;
    transform: rotate(13.43deg);
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
`;
