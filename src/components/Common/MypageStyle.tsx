import styled from "styled-components";

const Container = styled.div`
    width: 1040px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-top: 50px;

    /* text */
    .title {
        font-size: 35px;
    }
    .number {
        color: #f1b95c;
        font-weight: bold;
    }
    .number,
    .notice {
        font-size: 21px;
    }
`;
const GreyDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 25px 37px;
    gap: 24px;
    border: 0.5px solid #b2b2b2;
    border-radius: 5px;

    img {
        border-radius: 10px;
        height: 134px;
        width: 236px;
        object-fit: cover;
    }
    li {
        font-size: 13px;
    }
    /* text */
    .postTitle {
        font-size: 15px;
    }
    .author {
        font-size: 11px;
        color: #999999;
    }
`;
const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
`;
const RowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export { Container, GreyDiv, ColumnDiv, RowDiv };
