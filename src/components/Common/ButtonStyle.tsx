import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const GreyButton = styled(StyledButton)`
    width: 353px;
    height: 40px;
    background: #f1f3f5;
    border-radius: 5px;
`;

export { StyledButton, GreyButton };
