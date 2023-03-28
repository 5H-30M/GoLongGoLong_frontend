import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";
import pawprint from "../../assets/imgs/pawprint.png";

const Container = styled(Column)`
    align-items: center;

    .icon {
        padding-right: 25px;
    }
    .title {
        font-size: 50px;
        padding: 90px;
    }
`;
const Pawprint = styled.img.attrs({
    src: `${pawprint}`,
})`
    position: absolute;
    width: 75px;
    transform: rotate(13.43deg);
    margin-top: 130px;
    margin-left: 250px;
`;
const Buttons = styled(Column)`
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
const Button = styled(Row)`
    justify-content: center;
    align-items: center;
    width: 494px;
    height: 54px;

    background: ${(props) => props.color};
    border-radius: 4px;
    font-size: 14px;
`;

export { Container, Pawprint, Buttons, Button };
