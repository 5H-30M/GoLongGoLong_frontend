import styled from "styled-components";
import { Column, Row } from "components/Common/DivStyle";

const Container = styled(Row)`
    gap: 57px;
    font-size: 20px;
    .number {
        color: #f1b95c;
        font-weight: bold;
    }

    img {
        width: 25px;
        height: 25px;
    }
`;

const Menu = styled.div<{ border: string }>`
    padding: 5px;
    border-bottom: ${(props) => props.border};
    cursor: pointer;
    position: relative;
`;

export { Container, Menu };
