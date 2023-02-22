import styled from "styled-components";
import thumbnail from "../../assets/imgs/test/1.jpg";

const PostInfo = () => {
    return (
        <Container>
            <text className="title">까불이에게 삶의 희망을 주세요</text>
            <Div>
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
                    <div>
                        <text className="name">후원자</text>
                        <RowDiv>
                            <text className="number">189</text>
                            <text className="unit">명</text>
                        </RowDiv>
                    </div>
                    <Line></Line>
                    <RowDiv>
                        <text className="small">목표금액 1,000,000원</text>
                    </RowDiv>
                    <RowDiv>
                        <text className="small">
                            모금기간 2022.06.29 ~ 2022.07.27
                        </text>
                    </RowDiv>
                    <DonateButton>기부하기</DonateButton>
                </Right>
            </Div>
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
const Div = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;

    img {
        width: 573px;
        height: 429px;
        border-radius: 10px;
        object-fit: cover;
    }
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;
const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 5px;
`;
const Line = styled.div`
    width: 340px;
    height: 1px;
    background: #f4f4f4;
`;
const DonateButton = styled.button`
    width: 353px;
    height: 40px;
    background: #f1f3f5;
    border: none;
    border-radius: 5px;
`;
