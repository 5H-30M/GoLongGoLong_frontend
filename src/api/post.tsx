import axios from "axios";
import { apiEndpoint } from "./endpoint";
import { postType, postingPostType } from "utils/types";

interface propsType {
    post?: postType | postingPostType;
    postId?: number;
}

export const ViewAllApi = async () => {
    try {
        let res = await axios.get(`${apiEndpoint}/board`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const WriteApi = async ({ post }: propsType) => {
    try {
        await axios.post(`${apiEndpoint}/board`, post);
        alert("글이 작성되었습니다.");
        return true;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
        alert("오류가 발생했습니다. 다시 시도해 주세요.");
        return false;
    }
};

export const ViewApi = async (
    postId: number
): Promise<postType | undefined> => {
    try {
        let res = await axios.get(`${apiEndpoint}/board/${postId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const UpdateApi = async ({ post, postId }: propsType) => {
    try {
        await axios.patch(`${apiEndpoint}/board/${postId}`, post);
        console.log("글이 수정되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async ({ postId }: propsType) => {
    try {
        await axios.delete(`${apiEndpoint}/board/${postId}`);
        alert("글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
