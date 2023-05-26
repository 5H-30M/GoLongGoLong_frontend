import { Container } from "components/Common/MyPageStyle";
import Payment from "components/ChargeToken/Payment";
import { Row } from "components/Common/DivStyle";
import { useAppSelector } from "hooks/useAppSelector";

const ChargeToken = () => {
    const user = useAppSelector((state) => state.auth.userData);

    return (
        <Container>
            <text className="title">토큰 충전소</text>
            {user && (
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                    <Payment user={user} />
                    <Payment user={user} />
                </Row>
            )}
        </Container>
    );
};

export default ChargeToken;
