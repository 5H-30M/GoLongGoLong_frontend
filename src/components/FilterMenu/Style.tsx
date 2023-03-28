import styled from "styled-components";
import { Row } from "components/Common/DivStyle";
import { StyledButton } from "components/Common/ButtonStyle";

const Container = styled(Row)`
    gap: 57px;

    text {
        font-size: 20px;
        color: #f1b95c;
        font-weight: bold;
    }
`;
const Menu = styled(StyledButton)<{ border: string }>`
    font-size: 20px;
    padding: 5px;

    border-bottom: ${(props) => props.border};
`;

export { Container, Menu };
