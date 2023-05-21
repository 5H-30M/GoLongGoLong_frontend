import axios from "axios";
import { postingCommentType } from "utils/types";

export const WriteApi = async (comment: postingCommentType) => {
    try {
        await axios.post("/board/comment", comment);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async (commentId: number) => {
    try {
        await axios.delete(`/board/comment/${commentId}`);
        alert("댓글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
