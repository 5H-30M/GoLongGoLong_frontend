import axios from "axios";
import { apiEndpoint } from "./endpoint";

export const PostApi = async (fileName: string) => {
    try {
        let res = await axios.post(`${apiEndpoint}/pre-receipt/${fileName}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
