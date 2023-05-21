import { Row } from "components/Common/DivStyle";
import { Container, GreyDiv, Button } from "./Style";
import { useState } from "react";
import { WriteApi } from "api/comment";
import { epilPostType, postingCommentType, userType } from "utils/types";
import { testUser } from "redux/authSlice";
import { useAppSelector } from "hooks/useAppSelector";

interface propsType {
    epilpost: epilPostType;
}

const WriteComment = ({ epilpost }: propsType) => {
    const [input, setInput] = useState<string>();
    const user = useAppSelector((state) => state.auth.userData);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const WriteComment = async (comment: postingCommentType) => {
        await WriteApi(comment);
        //새로고침
        window.location.reload();
    };
    const handleSubmit = () => {
        if (window.confirm("댓글을 작성하시겠습니까?")) {
            if (input) {
                //post api
                const comment: postingCommentType = {
                    content: input,
                    review_id: epilpost.id,
                    writer_id: user.user_id,
                };
                WriteComment(comment);
            } else {
                alert("내용을 입력해주세요.");
            }
        }
    };

    return (
        <Container
            style={{ alignItems: "flex-end", padding: "50px 0", gap: "10px" }}
        >
            <GreyDiv>
                <input
                    name="input"
                    value={input}
                    onChange={handleInput}
                ></input>
            </GreyDiv>
            <Row style={{ gap: "10px", alignItems: "center" }}>
                <text>{input ? input.length : 0}/500</text>
                <Button onClick={handleSubmit}>등록</Button>
            </Row>
        </Container>
    );
};

export default WriteComment;
