import { StyledImg, GreyDiv } from "components/Common/MyPageStyle";
import { Column } from "components/Common/DivStyle";
import img1 from "../../assets/imgs/test/3.jpg";
import FundStatus from "components/FundStatus/FundStatus";

const Interest = () => {
    return (
        <GreyDiv>
            <StyledImg src={img1}></StyledImg>
            <Column
                style={{
                    height: "134px",
                    justifyContent: "space-between",
                }}
            >
                <Column style={{ gap: "10px" }}>
                    <text className="postTitle">
                        퓨리를 위해 모금 부탁드립니다
                    </text>
                    <text className="author">고양시캣맘</text>
                </Column>
                <FundStatus />
            </Column>
        </GreyDiv>
    );
};

export default Interest;
