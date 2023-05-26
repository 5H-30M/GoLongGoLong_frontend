import axios from "axios";
import { epilPostType, postingEpilType } from "utils/types";
import { apiEndpoint } from "./endpoint";

interface propsType {
    epilpost?: epilPostType | postingEpilType;
    reviewId?: number;
}

export const ViewAllApi = async () => {
    try {
        let res = await axios.get(`${apiEndpoint}/review`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const ViewApi = async (reviewId: number) => {
    try {
        let res = await axios.get(`${apiEndpoint}/review/${reviewId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const ViewByPostIdApi = async (postId: number) => {
    try {
        let res = await axios.get(`${apiEndpoint}/review/board/${postId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const WriteApi = async (epilpost: postingEpilType) => {
    try {
        await axios.post(`${apiEndpoint}/review`, epilpost);
        alert("글이 작성되었습니다.");
        return true;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
        alert("오류가 발생했습니다. 다시 시도해 주세요.");
        return false;
    }
};

export const UpdateApi = async ({ epilpost, reviewId }: propsType) => {
    try {
        await axios.put(`${apiEndpoint}/review/${reviewId}`, epilpost);
        alert("글이 수정되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async (reviewId: number) => {
    try {
        await axios.delete(`${apiEndpoint}/review/${reviewId}`);
        alert("글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
