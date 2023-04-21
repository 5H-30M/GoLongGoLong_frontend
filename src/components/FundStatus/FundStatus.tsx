import { Row } from "components/Common/DivStyle";
import { Container } from "./Style";

interface propsType {
    totalAmount: number;
    targetAmount: number;
    createdAt: string;
    period: number;
}

const FundStatus = ({
    totalAmount,
    targetAmount,
    createdAt,
    period,
}: propsType) => {
    const percent = ((totalAmount / targetAmount) * 100).toFixed(0); //toFixed(0) : 소수점은 버린다.
    const passDays = Math.floor(
        (new Date().getTime() - new Date(createdAt).getTime()) /
            (60 * 60 * 24 * 1000)
    ); //(현재날짜 - 글 게시날짜), 즉 글을 게시한 후로 며칠이 흘렀는가
    const leftDays = period - passDays; //올림하여 계산

    return (
        <Container>
            <Row style={{ alignItems: "center", gap: "10px" }}>
                <text className="percent">{percent}%</text>
                <text className="totalAmount">{totalAmount}원</text>
            </Row>
            <text className="leftDays">{leftDays}일</text>
        </Container>
    );
};

export default FundStatus;
