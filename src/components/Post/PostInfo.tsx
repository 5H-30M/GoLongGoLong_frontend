import styled from "styled-components";
import thumbnail from "../../assets/imgs/test/1.jpg";
import { GreyButton } from "components/Common/ButtonStyle";
import { Column, Row } from "components/Common/DivStyle";

const PostInfo = () => {
    return (
        <Container>
            <text className="title">까불이에게 삶의 희망을 주세요</text>
            <Row style={{ gap: "60px" }}>
                <img src={thumbnail}></img>
                <Right>
                    <ColumnDiv>
                        <text className="name">모인금액</text>
                        <RowDiv>
                            <text className="number">1,220,000</text>
                            <text className="unit">원</text>
                        </RowDiv>
                    </ColumnDiv>
                    <ColumnDiv>
                        <text className="name">남은시간</text>
                        <RowDiv>
                            <text className="number">1</text>
                            <text className="unit">일</text>
                        </RowDiv>
                    </ColumnDiv>
                    <ColumnDiv>
                        <text className="name">후원자</text>
                        <RowDiv>
                            <text className="number">189</text>
                            <text className="unit">명</text>
                        </RowDiv>
                    </ColumnDiv>
                    <Line></Line>
                    <RowDiv>
                        <text className="small">목표금액 1,000,000원</text>
                    </RowDiv>
                    <RowDiv>
                        <text className="small">
                            모금기간 2022.06.29 ~ 2022.07.27
                        </text>
                    </RowDiv>
                    <GreyButton>기부하기</GreyButton>
                </Right>
            </Row>
        </Container>
    );
};

export default PostInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
    gap: 50px;

    img {
        width: 573px;
        height: 429px;
        border-radius: 10px;
        object-fit: cover;
    }

    /* text */
    .title {
        font-size: 30px;
    }
    .name {
        font-size: 14px;
    }
    .number {
        font-size: 39px;
    }
    .unit,
    .small {
        font-size: 12px;
    }
`;
const Right = styled(Column)`
    gap: 28px;
`;
const ColumnDiv = styled(Column)`
    gap: 5px;
`;
const RowDiv = styled(Row)`
    align-items: flex-end;
    gap: 5px;
`;
const Line = styled.div`
    width: 340px;
    height: 1px;
    background: #f4f4f4;
`;
