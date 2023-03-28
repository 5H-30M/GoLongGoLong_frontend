import { Column } from "components/Common/DivStyle";
import styled from "styled-components";

const Container = styled(Column)`
    width: 750px;
    justify-content: flex-start;
    gap: 10px;

    img {
        height: 70px;
        width: 70px;
        object-fit: cover;
    }
    .small {
        font-size: 12px;
    }
    .medium {
        font-size: 17px;
    }
`;

export { Container };
