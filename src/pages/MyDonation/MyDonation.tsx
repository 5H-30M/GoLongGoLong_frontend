import { Container } from "components/Common/MyPageStyle";
import Search from "components/Search/Search";
import { Row } from "components/Common/DivStyle";
import Donation from "components/MyDonation/Donation";

const MyDonation = () => {
    return (
        <Container>
            <text className="title">기부 현황</text>
            <Row>
                <Row style={{ width: "100%" }}>
                    <text className="number">1</text>
                    <text className="notice">건의 기부 내역이 있습니다.</text>
                </Row>
                <Search />
            </Row>
            <Donation />
        </Container>
    );
};

export default MyDonation;
