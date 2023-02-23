import Author from "components/Common/Author";
import Banner from "components/EpiloguePostPage/Banner";
import PostContents from "components/EpiloguePostPage/PostContents";
import styled from "styled-components";

const EpiloguePostPage = () => {
    return (
        <Container>
            <Banner />
            <PostContents />
            <Author />
        </Container>
    );
};

export default EpiloguePostPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;
