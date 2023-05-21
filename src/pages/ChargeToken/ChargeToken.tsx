import { Container } from "components/Common/MyPageStyle";
import { userType } from "utils/types";
import { useState } from "react";
import { testUser } from "redux/authSlice";
import Payment from "components/ChargeToken/Payment";
import { Row } from "components/Common/DivStyle";

const ChargeToken = () => {
    const [user, setUser] = useState<userType>(testUser);

    return (
        <Container>
            <text className="title">토큰 충전소</text>
            <Row style={{ width: "100%", justifyContent: "space-between" }}>
                <Payment user={user} />
                <Payment user={user} />
            </Row>
        </Container>
    );
};

export default ChargeToken;
