import { GreyDiv, StyledImg } from "components/Common/MyPageStyle";
import img1 from "../../assets/imgs/test/1.jpg";
import DonationTracking from "components/MyDonation/DonationTracking";
import { Row, Column } from "components/Common/DivStyle";

const Donation = () => {
    return (
        <GreyDiv style={{ flexDirection: "column", gap: "20px" }}>
            <Row style={{ gap: "24px" }}>
                <StyledImg src={img1}></StyledImg>
                <Column style={{ gap: "10px" }}>
                    <text className="postTitle">
                        다리를 다친 뚜비를 도와주세요
                    </text>
                    <text className="author">카라카라캐리</text>
                    <li>후원일 2022. 11. 21</li>
                    <li>32,000원 후원</li>
                </Column>
            </Row>
            <DonationTracking />
        </GreyDiv>
    );
};

export default Donation;
