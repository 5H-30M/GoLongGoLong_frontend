import styled from "styled-components";
import { Row } from "components/Common/DivStyle";

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;
const Slide = styled(Row)<{ x: number; transition: boolean }>`
    width: 600vw;
    transform: translate(${(props) => props.x}vw);
    transition: ${(props) => (props.transition ? "transform 1s " : "")};

    img {
        width: 100vw;
        object-fit: cover;
    }
`;
const Chevron = styled.img`
    width: 9px;
    height: 16px;
    opacity: 0.5;
    transition: opacity 0.2s;
`;
const Before = styled(Row)`
    position: absolute;
    width: 40px;
    height: 35px;
    left: 86.3932vw;
    top: 14.8438vw;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;

    justify-content: center;
    align-items: center;
    &:hover {
        ${Chevron} {
            opacity: 1;
        }
    }
`;
const Next = styled(Before)`
    left: calc(86.3932vw + 40px);
`;

export { Container, Slide, Chevron, Before, Next };
