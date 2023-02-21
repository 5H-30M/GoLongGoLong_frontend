import Author from "components/Author";
import PostContents from "components/PostContents";
import PostInfo from "components/PostInfo";
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
