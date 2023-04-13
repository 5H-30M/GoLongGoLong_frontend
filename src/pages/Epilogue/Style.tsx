import styled from "styled-components";
import { Column } from "components/Common/DivStyle";
import banner from "../../assets/imgs/banners/epilogue.png";

const Container = styled(Column)`
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
`;
const Banner = styled.img.attrs({
    src: `${banner}`,
})`
    width: 100vw;
`;
const InnerContainer = styled(Column)`
    width: 67.7vw;
    gap: 30px;
`;

export { Container, Banner, InnerContainer };
