import styled from "styled-components";
import defaultImg from "../assets/imgs/default.png";
import { Container, PostInfo, Thumbnail, Title, Author } from "./styles/Board";

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
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </PostInfo>
            <FundStatus>
                <Left>
                    <Percent>76%</Percent>
                    <TotalAmout>684,500원</TotalAmout>
                </Left>
                <LeftDays>10일</LeftDays>
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
`;
const Left = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
const Percent = styled.text`
    font-size: 15px;
    color: #f1b95c;
    font-weight: bold;
`;
const TotalAmout = styled.text`
    font-size: 14px;
`;
const LeftDays = styled.text`
    font-size: 14px;
    color: #6d6d6d;
`;
