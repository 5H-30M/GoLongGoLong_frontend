import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 68px;

    /* text */
    .menu {
        font-size: 18px;
        width: 23px;
    }
    .logo {
        font-size: 22px;
        font-weight: 800;
        font-color: "3e3e3e";
        width: 35px;
    }
`;
const Left = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
const Right = styled(Left)`
    gap: 64px;
`;

export { Container, Right, Left };
