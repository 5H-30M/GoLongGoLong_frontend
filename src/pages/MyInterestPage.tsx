import {
    Wrapper,
    Container,
    RowDiv,
    GreyDiv,
    ColumnDiv,
} from "components/Common/MypageStyle";
import img1 from "../assets/imgs/test/3.jpg";
import FundStatus from "components/Common/FundStatus";

const MyInterestPage = () => {
    return (
        <Wrapper>
            <Container>
                <text className="title">관심 모금글</text>
                <RowDiv>
                    <text className="number">1</text>
                    <text className="notice">건의 관심 모금글이 있습니다.</text>
                </RowDiv>
                <GreyDiv>
                    <img src={img1}></img>
                    <ColumnDiv>
                        <ColumnDiv style={{ padding: "0" }}>
                            <text className="postTitle">
                                퓨리를 위해 모금 부탁드립니다
                            </text>
                            <text className="author">고양시캣맘</text>
                        </ColumnDiv>
                        <FundStatus />
                    </ColumnDiv>
                </GreyDiv>
            </Container>
        </Wrapper>
    );
};

export default MyInterestPage;
