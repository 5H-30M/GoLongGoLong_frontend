import Author from "components/Author/Author";
import Banner from "components/Post/Banner";
import EpiloguePostContents from "components/Post/EpiloguePostContents";
import { Container } from "./Style";

const EpiloguePost = () => {
    return (
        <Container>
            <Banner />
            <EpiloguePostContents />
            <Author />
        </Container>
    );
};

export default EpiloguePost;
