import styled from "styled-components";
import defaultImg from "../../assets/imgs/default.png";
import { Container, PostInfo, Thumbnail } from "../Common/BoardStyle";
import FundStatus from "components/Common/FundStatus";

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
            <FundStatus />
        </Container>
    );
};

export default Post;
