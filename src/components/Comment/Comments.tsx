import { Container } from "./Style";
import { commentType } from "api/comment";
import Comment from "./Comment";
import { ThinLine } from "components/Common/PostStyle";

const Comments = ({ comments }: commentType) => {
    const renderComments = () => {
        const result: any[] = [];
        result.push(
            comments?.map((comment, index) => {
                return <Comment comment={comment} />;
            })
        );
        return result;
    };
    return (
        <Container>
            <ThinLine />
            <text style={{ fontSize: "20px", padding: "30px 0" }}>
                댓글&nbsp;
                {comments ? (
                    <text
                        style={{
                            fontSize: "20px",
                            color: "#F1B95C",
                            fontWeight: 700,
                        }}
                    >
                        {comments.length}
                    </text>
                ) : (
                    ""
                )}
            </text>
            {comments ? renderComments() : ""}
        </Container>
    );
};

export default Comments;
