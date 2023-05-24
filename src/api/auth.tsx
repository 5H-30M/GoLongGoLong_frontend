import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiEndpoint } from "./endpoint";

interface loginApiType {
    code: string;
}
export const LoginApi = async ({ code }: loginApiType) => {
    try {
        let res = await axios.post(`${apiEndpoint}/api/oauth/token`, code);
        console.log(res.data); //콘솔에 찍히는 데이터 형태 확인 후 수정
        //localStorage에 토큰과 만료정보를 저장한다.
        window.localStorage.setItem("accessToken", res.data.access_token);
        window.localStorage.setItem("refreshToken", res.data.refresh_token);
        window.localStorage.setItem("expiresIn", res.data.expires_in);
        window.localStorage.setItem(
            "refreshTokenExpiresIn",
            res.data.refresh_token_expires_in
        );
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
export const RefreshTokenApi = async () => {
    try {
        let res = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            {
                grant_type: "refresh_token",
                client_id: process.env.REACT_APP_KAKAO_API_KEY,
                refresh_token: window.localStorage.getItem("refreshToken"),
            },
            {
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded;charset=utf-8",
                },
            }
        );
        window.localStorage.setItem("accessToken", res.data.access_token);
        window.localStorage.setItem("expiresIn", res.data.expires_in);
        return res.data.access_token;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err);
    }
};
export const DeleteUserApi = () => {
    const navigate = useNavigate();
    axios
        .delete(`${apiEndpoint}/users`)
        .then(() => {
            alert("정상적으로 탈퇴 되었습니다.");

            // 로그아웃 시키는 로직

            navigate("/"); // 메인 페이지로 이동
        })
        .catch((err) => {
            console.log(err);
            alert("회원 탈퇴에 실패하였습니다.");
        });
};
