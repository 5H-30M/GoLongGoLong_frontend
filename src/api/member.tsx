import axios from "axios";
import { apiEndpoint } from "./endpoint";
import { updateUserType, userType_new, walletType } from "utils/types";

export const ViewApi = async (userId: number) => {
    try {
        let res = await axios.get(`${apiEndpoint}/member/${userId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

interface updateType {
    updated: updateUserType;
    userId: number;
}
export const UpdateApi = async ({ updated, userId }: updateType) => {
    try {
        await axios.patch(`${apiEndpoint}/member/update/${userId}`, updated);
        window.location.reload();
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

interface createWalletType {
    userId: number;
    wallet: walletType;
}
export const CreateWalletApi = async ({ userId, wallet }: createWalletType) => {
    try {
        let res = await axios.patch(
            `${apiEndpoint}/member/wallet/${userId}`,
            wallet
        );
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const InterestApi = async (userId: number) => {
    try {
        let res = await axios.get(`${apiEndpoint}/member/interest/${userId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const DonationApi = async (userId: number) => {
    try {
        let res = await axios.get(`${apiEndpoint}/member/donation/${userId}`);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
