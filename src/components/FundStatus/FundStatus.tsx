import { Row } from "components/Common/DivStyle";
import { Container } from "./Style";

const FundStatus = () => {
    return (
        <Container>
            <Row style={{ alignItems: "center", gap: "10px" }}>
                <text className="percent">76%</text>
                <text className="totalAmount">684,500원</text>
            </Row>
            <text className="leftDays">10일</text>
        </Container>
    );
};

export default FundStatus;
