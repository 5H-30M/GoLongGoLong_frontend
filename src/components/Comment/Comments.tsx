import { Container } from "./Style";
import { commentType } from "utils/types";
import Comment from "./Comment";
import { ThinLine } from "components/Common/PostStyle";

interface propsType {
    comments: commentType[];
}

const Comments = ({ comments }: propsType) => {
    const renderComments = () => {
        const result: any[] = [];
        result.push(
            comments?.map((comment, index) => {
                return <Comment key={index} comment={comment} />;
            })
        );
        return result;
    };
    return (
        <Container>
            <ThinLine />
            <text style={{ fontSize: "20px", padding: "30px 0" }}>
                댓글&nbsp;
                {comments && (
                    <text
                        style={{
                            fontSize: "20px",
                            color: "#F1B95C",
                            fontWeight: 700,
                        }}
                    >
                        {comments.length}
                    </text>
                )}
            </text>
            {comments && renderComments()}
        </Container>
    );
};

export default Comments;
