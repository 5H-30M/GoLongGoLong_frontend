import axios from "axios";
import { postType } from "redux/postSlice";

export const ViewAllApi = async () => {
    try {
        let res = await axios.get("/board");
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const WriteApi = async ({ post }: postType) => {
    try {
        await axios.post("/board", post);
        alert("글이 작성되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const ViewApi = async (postId: number) => {
    try {
        let res = await axios.get(`/board/${postId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const UpdateApi = async ({ post }: postType, postId: number) => {
    try {
        await axios.put(`/board/${postId}`, post);
        alert("글이 수정되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async (postId: number) => {
    try {
        await axios.delete(`/board/${postId}`);
        alert("글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
