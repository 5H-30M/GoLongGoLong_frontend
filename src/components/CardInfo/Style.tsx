import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    /* text */
    .percent {
        font-size: 15px;
        color: #f1b95c;
        font-weight: bold;
    }
    .totalAmount {
        font-size: 14px;
    }
    .leftDays {
        font-size: 14px;
        color: #6d6d6d;
    }
`;

export { Container };
