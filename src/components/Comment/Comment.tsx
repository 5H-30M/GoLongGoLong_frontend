import { Column, Row } from "components/Common/DivStyle";
import { GreyDiv } from "./Style";
import { commentType, userType_new } from "utils/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { ViewApi } from "api/member";
import { DeleteApi } from "api/comment";
import { UpdateApi } from "api/comment";

interface propsType {
    comment: commentType;
}

const Comment = ({ comment }: propsType) => {
    const [input, setInput] = useState<string>(comment.content);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    const date = new Date(comment.created_at);

    const user = useAppSelector((state) => state.auth.userData);
    const [writer, setWriter] = useState<userType_new>();
    useEffect(() => {
        const getUser = async () => {
            let res = await ViewApi(comment.review_id);
            setWriter(res);
        };
        getUser();
    }, []);

    const [updating, setUpdating] = useState<boolean>(false);
    const handleUpdate = async () => {
        setUpdating(!updating);

        if (updating) {
            const commentId = comment.comment_id;
            const content = {
                content: input,
                review_id: comment.review_id,
                writer_id: comment.writer_id,
            };
            if (window.confirm("댓글을 수정하시겠습니까?")) {
                await UpdateApi({ commentId, content });
                window.location.reload();
            }
        }
    };
    const handleDelete = async () => {
        if (window.confirm("댓글을 삭제하시겠습니까?")) {
            await DeleteApi(comment.comment_id);
            window.location.reload();
        }
    };

    return (
        <Column style={{ gap: "8px", marginBottom: "30px" }}>
            <text>{writer?.nickName}</text>
            <GreyDiv>
                {updating ? (
                    <input
                        type="text"
                        value={input}
                        onChange={handleInput}
                    ></input>
                ) : (
                    comment.content
                )}
            </GreyDiv>
            <Row style={{ width: "100%", justifyContent: "space-between" }}>
                <text style={{ color: "#999999", fontSize: "13px" }}>
                    {date.getFullYear()}년 {date.getMonth() + 1}월{" "}
                    {date.getDate()}일
                </text>
                {writer?.id == user?.id && (
                    <Row
                        style={{
                            color: "#999999",
                            fontSize: "13px",
                        }}
                    >
                        <text
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={handleUpdate}
                        >
                            {updating ? "수정 완료" : "수정"}
                        </text>
                        &nbsp;|&nbsp;
                        <text
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={handleDelete}
                        >
                            삭제
                        </text>
                    </Row>
                )}
            </Row>
        </Column>
    );
};

export default Comment;
