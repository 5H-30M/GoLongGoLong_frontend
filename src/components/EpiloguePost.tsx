import styled from "styled-components";
import defaultImg from "../assets/imgs/default.png";
import { Container, PostInfo, Thumbnail } from "./styles/Board";

interface propsType {
    thumbnail: React.CSSProperties;
    title: string;
    author: string;
}

const EpiloguePost = (props: propsType) => {
    return (
        <Container>
            <PostInfo style={{ position: "relative" }}>
                <Mark>후기</Mark>
                <Thumbnail
                    src={props.thumbnail ? props.thumbnail : defaultImg}
                ></Thumbnail>
                <text className="title">{props.title}</text>
                <text className="author">{props.author}</text>
            </PostInfo>
        </Container>
    );
};

export default EpiloguePost;

const Mark = styled.div`
    width: 37px;
    height: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #444444;
    font-size: 10px;
    color: #ffffff;
    position: absolute;
    left: 10px;
    top: 10px;
`;
