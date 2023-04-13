import Comments from "./Comments";
import WriteComment from "./WirteComment";
import { commentType } from "api/comment";
import { Container } from "./Style";

const CommentBox = ({ comments }: commentType) => {
    return (
        <Container>
            <WriteComment />
            {comments ? <Comments comments={comments} /> : ""}
        </Container>
    );
};

export default CommentBox;
