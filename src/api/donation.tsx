import axios from "axios";
import { apiEndpoint } from "./endpoint";
import { transitionType, postingDonationType } from "utils/types";

export const PostApi = async (donation: postingDonationType) => {
    try {
        await axios.post(`${apiEndpoint}/donation`, donation);
        return true;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
        return false;
    }
};

export const GetApi = async (userId: number) => {
    try {
        let res = await axios.get(`${apiEndpoint}/donation/${userId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const SendApi = async (donation: postingDonationType) => {
    try {
        await axios.post(`${apiEndpoint}/donation/rescuer`, donation);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
