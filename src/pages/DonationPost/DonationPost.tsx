import Author from "components/Author/Author";
import DonationPostContents from "components/Post/DonationPostContents";
import PostInfo from "components/Post/PostInfo";
import { Container } from "./Style";

const DonationPost = () => {
    return (
        <Container>
            <PostInfo />
            <DonationPostContents />
            <Author />
        </Container>
    );
};

export default DonationPost;
