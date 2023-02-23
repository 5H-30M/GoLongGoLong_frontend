import styled from "styled-components";

const FundStatus = () => {
    return (
        <Container>
            <Left>
                <text className="percent">76%</text>
                <text className="totalAmount">684,500원</text>
            </Left>
            <text className="leftDays">10일</text>
        </Container>
    );
};

export default FundStatus;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    border-bottom: 4px solid #d0d0d0;
    padding-bottom: 15px;

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
const Left = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
