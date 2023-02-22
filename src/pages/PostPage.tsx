import Author from "components/Common/Author";
import PostContents from "components/PostPage/PostContents";
import PostInfo from "components/PostPage/PostInfo";
import styled from "styled-components";

const PostPage = () => {
    return (
        <Container>
            <PostInfo />
            <PostContents />
            <Author />
        </Container>
    );
};

export default PostPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;
