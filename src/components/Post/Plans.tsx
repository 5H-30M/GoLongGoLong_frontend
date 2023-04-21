import { Container, ThinLine, Line } from "components/Common/PostStyle";
import { Row } from "components/Common/DivStyle";
import { postType } from "redux/postSlice";

interface propsType {
    post: postType;
}

const Plans = ({ post }: propsType) => {
    return (
        <Container>
            <ThinLine />
            <text className="title">모금액, 이렇게 사용할 예정입니다</text>
            <div>
                {Object.entries(post.plans).map(([planName, planNum]) => {
                    return <PlanList planName={planName} planNum={planNum} />;
                })}
            </div>
            <Line />
        </Container>
    );
};

interface planListType {
    planName: string;
    planNum: number;
}

const PlanList = ({ planName, planNum }: planListType) => {
    return (
        <Row style={{ justifyContent: "space-between", paddingBottom: "7px" }}>
            <li>{planName}</li>
            <div>{planNum}원</div>
        </Row>
    );
};

export default Plans;
