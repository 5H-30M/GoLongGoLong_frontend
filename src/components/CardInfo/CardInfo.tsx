import { Row } from "components/Common/DivStyle";
import { Container } from "./Style";
import { calLeftDays, calPercent } from "components/Common/CalculateInfo";
import { postType } from "utils/types";

interface propsType {
    post: postType;
}

const FundStatus = ({ post }: propsType) => {
    const totalAmount = post.amount;
    const percent = calPercent({ post });
    const leftDays = calLeftDays({ post });

    return (
        <Container>
            <Row style={{ alignItems: "center", gap: "10px" }}>
                <text className="percent">{percent}%</text>
                <text className="totalAmount">{totalAmount}원</text>
            </Row>
            <text className="leftDays">
                {leftDays == 0 ? (
                    <text style={{ color: "#EB4B38" }}>모금완료</text>
                ) : leftDays == 1 ? (
                    <text style={{ color: "#EB4B38" }}>오늘마감</text>
                ) : (
                    `${leftDays}일`
                )}
            </text>
        </Container>
    );
};

export default FundStatus;
