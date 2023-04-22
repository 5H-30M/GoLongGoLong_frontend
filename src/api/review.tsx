import axios from "axios";
import { epilPostType } from "redux/postSlice";

interface propsType {
    epilpost?: epilPostType;
    reviewId?: number;
}

export const ViewAllApi = async () => {
    try {
        let res = await axios.get("/review");
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const ViewApi = async ({ reviewId }: propsType) => {
    try {
        let res = await axios.get(`/review/${reviewId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const WriteApi = async ({ epilpost }: propsType) => {
    try {
        await axios.post("/review", epilpost);
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
        await axios.put(`/review/${reviewId}`, epilpost);
        alert("글이 수정되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DeleteApi = async ({ reviewId }: propsType) => {
    try {
        await axios.delete(`/review/${reviewId}`);
        alert("글이 삭제되었습니다.");
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
