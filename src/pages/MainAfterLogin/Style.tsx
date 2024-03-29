import styled from "styled-components";
import { Column } from "components/Common/DivStyle";

const Container = styled(Column)`
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
`;
const InnerContainer = styled(Column)`
    width: 67.7vw;
    gap: 30px;
`;

export { Container, InnerContainer };
