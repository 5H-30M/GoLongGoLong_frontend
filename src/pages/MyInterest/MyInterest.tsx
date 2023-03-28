import { Container } from "components/Common/MyPageStyle";
import { Row } from "components/Common/DivStyle";
import Interest from "components/MyInterest/Interest";

const MyInterest = () => {
    return (
        <Container>
            <text className="title">관심 모금글</text>
            <Row>
                <text className="number">1</text>
                <text className="notice">건의 관심 모금글이 있습니다.</text>
            </Row>
            <Interest />
        </Container>
    );
};

export default MyInterest;
