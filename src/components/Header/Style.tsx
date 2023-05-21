import { Row, Column } from "components/Common/DivStyle";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 120px;

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
export const Left = styled(Row)`
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
export const Right = styled(Row)`
    justify-content: center;
    align-items: center;
    gap: 64px;
`;
export const StyledColumn = styled(Column)`
    justify-content: center;
    align-items: center;
    font-size: 10px;
    gap: 5px;
`;
