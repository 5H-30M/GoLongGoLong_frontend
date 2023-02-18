import styled from "styled-components";
import defaultImg from "../assets/imgs/default.png";

interface propsType {
    thumbnail: React.CSSProperties;
    title: string;
    author: string;
}

const EpiloguePost = (props: propsType) => {
    return (
        <Container>
            <PostInfo>
                <Mark>후기</Mark>
                <Thumbnail
                    src={props.thumbnail ? props.thumbnail : defaultImg}
                ></Thumbnail>
                <Title>{props.title}</Title>
                <Author>{props.author}</Author>
            </PostInfo>
        </Container>
    );
};

export default EpiloguePost;

const Thumbnail = styled.img`
    height: 134px;
    background-color: #dfdfdf;
    border-radius: 10px;
    object-fit: cover;
`;
const Container = styled.div`
    width: 236px;
    display: flex;
    flex-direction: column;
    border-bottom: 4px solid #d0d0d0;
    padding-bottom: 15px;
    margin: 25px 0px;
    gap: 26px;
`;
const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    position: relative;
`;
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
const Title = styled.text`
    font-size: 15px;
`;
const Author = styled.text`
    font-size: 10px;
    color: #999999;
`;
