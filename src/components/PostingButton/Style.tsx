import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 70px;

    position: fixed;
    bottom: 50px;
    right: 200px;

    background-color: #f1b95c;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
        transform: translateY(-2px);
    }
`;
