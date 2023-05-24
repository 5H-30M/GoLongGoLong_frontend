import axios from "axios";
import { apiEndpoint } from "./endpoint";

interface kakaoApiType {
    token: string;
}
export const GetKakaoUserApi = async ({ token }: kakaoApiType) => {
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Bearer ${token}`,
    };
    try {
        let res = await axios.get("https://kapi.kakao.com/v2/user/me", {
            headers,
        });
        console.log(res);
        return res.data; //사용자 정보(connected_at, email)을 리턴한다.
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

interface emailType {
    email: string;
}
export const RegisterApi = async ({ email }: emailType) => {
    try {
        let res = await axios.post(`${apiEndpoint}/users/my/info`, email);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
        throw err;
    }
};
export const ViewApi = async ({ email }: emailType) => {
    try {
        let res = await axios.post(`${apiEndpoint}/users/my/info`, email);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
export const ViewByIdApi = async (userId: number) => {
    try {
        let res = await axios.post(`${apiEndpoint}/users/my/info`, userId);
        return res.data;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};

export const UpdateApi = () => {
    let body = {
        // 업데이트할 정보
    };
    axios
        .post(`${apiEndpoint}/users/my/info`, body)
        .then(() => {
            alert("정보가 등록되었습니다.");
            // 리다이렉트
        })
        .catch((err) => {
            console.log(err);
        });
};

export const InterestApi = () => {
    axios
        .get(`${apiEndpoint}/users/my/info/like`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

const DonationApi = () => {
    axios
        .get(`${apiEndpoint}/users/my/info/status`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
