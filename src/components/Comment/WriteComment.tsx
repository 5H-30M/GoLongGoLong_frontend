import { Row } from "components/Common/DivStyle";
import { Container, GreyDiv, Button } from "./Style";
import { useState } from "react";
import { WriteApi } from "api/comment";
import { epilPostType, postingCommentType } from "utils/types";
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
                if (user) {
                    const comment: postingCommentType = {
                        content: input,
                        review_id: epilpost.id,
                        writer_id: user && user.id,
                    };
                    WriteComment(comment);
                } else {
                    alert("로그인 후 이용하실 수 있습니다.");
                }
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
                <input type="text" value={input} onChange={handleInput}></input>
            </GreyDiv>
            <Row style={{ gap: "10px", alignItems: "center" }}>
                <text>{input ? input.length : 0}/500</text>
                <Button onClick={handleSubmit}>등록</Button>
            </Row>
        </Container>
    );
};

export default WriteComment;
