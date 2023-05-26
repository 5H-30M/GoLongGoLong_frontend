import Comments from "./Comments";
import WriteComment from "./WriteComment";
import { commentType, epilPostType } from "utils/types";
import { Container } from "./Style";

interface propsType {
    epilpost: epilPostType;
    comments: commentType[];
}

const CommentBox = ({ epilpost, comments }: propsType) => {
    return (
        <Container>
            <WriteComment epilpost={epilpost} />
            {comments && <Comments comments={comments} />}
        </Container>
    );
};

export default CommentBox;
