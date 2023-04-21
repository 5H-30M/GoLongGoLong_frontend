import axios from "axios";
import { postType } from "redux/postSlice";

interface propsType {
    post?: postType;
    postId?: number;
}

export const ViewAllApi = async () => {
    try {
        let res = await axios.get("/board");
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const WriteApi = async ({ post }: propsType) => {
    try {
        await axios.post("/board", post);
        alert("글이 작성되었습니다.");
        return true;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
        alert("오류가 발생했습니다. 다시 시도해 주세요.");
        return true;
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

export const UpdateApi = async ({ post, postId }: propsType) => {
    try {
        await axios.put(`/board/${postId}`, post);
        alert("글이 수정되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async ({ postId }: propsType) => {
    try {
        await axios.delete(`/board/${postId}`);
        alert("글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
