import axios from "axios";
import { epilPostType } from "redux/postSlice";

export const ViewAllApi = async () => {
    try {
        let res = await axios.get("/review");
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const ViewApi = async (reviewId: number) => {
    try {
        let res = await axios.get(`/review/${reviewId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const WriteApi = async ({ epilpost }: epilPostType) => {
    try {
        await axios.post("/review", epilpost);
        alert("글이 작성되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const UpdateApi = async (
    { epilpost }: epilPostType,
    reviewId: number
) => {
    try {
        await axios.put(`/review/${reviewId}`, epilpost);
        alert("글이 수정되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async (reviewId: number) => {
    try {
        await axios.delete(`/review/${reviewId}`);
        alert("글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
