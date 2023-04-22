import styled from "styled-components";
import { GreyButton } from "components/Common/ButtonStyle";
import { Column, Row } from "components/Common/DivStyle";
import { postType } from "utils/types";

interface propsType {
    post: postType;
}

const PostInfo = ({ post }: propsType) => {
    const totalAmount = post.amount != undefined ? post.amount : -1;
    const donators = post.raised_people;
    const createdAt = post.created_at ? post.created_at : "";
    const percent = ((totalAmount / post.target_amount) * 100).toFixed(0);
    const passDays =
        (new Date(new Date().toLocaleString().substr(0, 11)).getTime() -
            new Date(
                new Date(createdAt).toLocaleString().substr(0, 11)
            ).getTime()) /
        (60 * 60 * 24 * 1000);
    const leftDays = post.period - passDays >= 0 ? post.period - passDays : 0;
    const dateFormat = (date: Date) => {
        const formatted: string =
            date.getFullYear() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getDate();

        return formatted;
    };
    const startDate = dateFormat(new Date(createdAt));
    const endDate = dateFormat(
        new Date(
            new Date(createdAt).getTime() + post.period * (60 * 60 * 24 * 1000)
        )
    );

    return (
        <Container>
            <text
                className="title"
                style={{ width: "100%", textAlign: "center" }}
            >
                {post.title}
            </text>
            <Row style={{ gap: "60px" }}>
                <img src={post.images[0]}></img>
                <Right>
                    <ColumnDiv>
                        <text className="name">모인금액</text>
                        <RowDiv style={{ alignItems: "center" }}>
                            <RowDiv>
                                <text className="number">{totalAmount}</text>
                                <text className="unit">원</text>
                            </RowDiv>
                            <PercentDiv>{percent}%</PercentDiv>
                        </RowDiv>
                    </ColumnDiv>
                    <ColumnDiv>
                        <text className="name">남은시간</text>
                        <RowDiv>
                            <text className="number">{leftDays}</text>
                            <text className="unit">일</text>
                        </RowDiv>
                    </ColumnDiv>
                    <ColumnDiv>
                        <text className="name">후원자</text>
                        <RowDiv>
                            <text className="number">{donators}</text>
                            <text className="unit">명</text>
                        </RowDiv>
                    </ColumnDiv>
                    <Line></Line>
                    <RowDiv>
                        <text className="small">
                            목표금액 &nbsp; {post.target_amount}원
                        </text>
                    </RowDiv>
                    <RowDiv>
                        <text className="small">
                            모금기간 &nbsp; {startDate} &nbsp; ~ &nbsp;{" "}
                            {endDate}
                        </text>
                    </RowDiv>
                    <GreyButton>
                        {post.status ? "기부종료" : "기부하기"}
                    </GreyButton>
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
const PercentDiv = styled(Row)`
    background-color: #f1b95c;
    font-size: 18px;
    padding: 5px 9px;
    border-radius: 5px;
    margin-left: 30px;
`;
const Line = styled.div`
    width: 340px;
    height: 1px;
    background: #f4f4f4;
`;
