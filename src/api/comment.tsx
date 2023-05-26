import axios from "axios";
import { postingCommentType } from "utils/types";
import { apiEndpoint } from "./endpoint";

export const WriteApi = async (comment: postingCommentType) => {
    try {
        await axios.post(`${apiEndpoint}/board/comment`, comment);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async (commentId: number) => {
    try {
        await axios.delete(`${apiEndpoint}/board/comment/${commentId}`);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

interface updateType {
    commentId: number;
    content: postingCommentType;
}
export const UpdateApi = async ({ commentId, content }: updateType) => {
    try {
        await axios.patch(`${apiEndpoint}/board/comment/${commentId}`, content);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
