import { Column } from "components/Common/DivStyle";
import styled from "styled-components";

const Container = styled(Column)`
    padding: 0px 240px;
    gap: 45px;

    /* text */
    li {
        font-size: 13px;
    }
    .title {
        font-size: 35px;
        margin: 50px 0;
    }
    .number {
        color: #f1b95c;
        font-weight: bold;
        font-size: 21px;
    }
    .notice {
        font-size: 21px;
    }
    .postTitle {
        font-size: 15px;
    }
    .author {
        font-size: 11px;
        color: #999999;
    }
`;
const StyledImg = styled.img`
    border-radius: 10px;
    height: 134px;
    width: 236px;
    object-fit: cover;
`;
const GreyDiv = styled.div`
    display: flex;

    border: 0.5px solid #b2b2b2;
    border-radius: 5px;

    padding: 25px 37px;
    gap: 24px;
`;

export { Container, StyledImg, GreyDiv };
