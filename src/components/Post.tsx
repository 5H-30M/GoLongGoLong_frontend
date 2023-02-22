import styled from "styled-components";
import defaultImg from "../assets/imgs/default.png";
import { Container, PostInfo, Thumbnail } from "./styles/Board";

interface propsType {
    thumbnail: React.CSSProperties;
    title: string;
    author: string;
}

const Post = (props: propsType) => {
    return (
        <Container>
            <PostInfo>
                <Thumbnail
                    src={props.thumbnail ? props.thumbnail : defaultImg}
                ></Thumbnail>
                <text className="title">{props.title}</text>
                <text className="author">{props.author}</text>
            </PostInfo>
            <FundStatus>
                <Left>
                    <text className="percent">76%</text>
                    <text className="totalAmount">684,500원</text>
                </Left>
                <text className="leftDays">10일</text>
            </FundStatus>
        </Container>
    );
};

export default Post;

const FundStatus = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* text */
    .percent {
        font-size: 15px;
        color: #f1b95c;
        font-weight: bold;
    }
    .totalAmount {
        font-size: 14px;
    }
    .leftDays {
        font-size: 14px;
        color: #6d6d6d;
    }
`;
const Left = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
