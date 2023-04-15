import styled from "styled-components";
import { Column } from "components/Common/DivStyle";

const Container = styled(Column)`
    width: 134px;
    justify-content: center;
    align-items: center;

    padding: 16px 0;
    gap: 25px;

    font-size: 19px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    background-color: #ffffff;

    position: absolute;
    top: 40px;
    left: 0;
`;

export { Container };
