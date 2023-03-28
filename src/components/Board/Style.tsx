import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";

const Container = styled(Column)`
    gap: 20px;
`;
const Cards = styled(Row)`
    gap: 25px;
    flex-wrap: wrap;
`;

export { Container, Cards };
