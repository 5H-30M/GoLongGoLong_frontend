import { LoginApi } from "api/auth";
import { GetKakaoUserApi, RegisterApi } from "api/userInfo";
import Spinner from "components/Spinner/Spinner";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo } from "redux/authSlice";
import GetPassword from "./GetPassword";

const Oauth = () => {
    const [token, setToken] = useState<string | null>("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    //1. url의 인가코드를 변수에 저장한다.
    const code = new URL(window.location.href).searchParams.get("code");

    const loginApi = async () => {
        if (code) {
            await LoginApi({ code });
        }
    };
    const getEmail = async () => {
        if (token) {
            let { data } = await GetKakaoUserApi({ token });
            const email = data.kakao_account.email;
            const connectedAt = data.connected_at;
            //5. 카카오 계정이 연결된 시각이 30초 안이라면 회원으로 등록한다.
            if (
                new Date(new Date().toUTCString()).getTime() -
                    new Date(connectedAt).getTime() <
                30 * 1000
            ) {
                try {
                    await RegisterApi({ email });
                } catch (err) {
                    alert("회원 가입 도중 오류가 발생했습니다.");
                    return false;
                }
            }
            //6. 사용자 email로 사용자 정보를 가져와 리덕스로 저장한다.
            try {
                dispatch(fetchUserInfo({ email }));
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
        return false;
    };
    useEffect(() => {
        //2. 인가코드로 access token, refresh token을 받아온다.
        loginApi();
        //3. access token을 변수에 저장한다.
        setToken(window.localStorage.getItem("accessToken"));
    }, []);
    useEffect(() => {
        const func = async () => {
            //4. access token으로 사용자 email을 가져온다.
            let isSuccess = await getEmail();
            //7. 로그인에 성공했다면 메인 화면으로 이동한다.
            if (isSuccess) {
                navigate("/");
            }
        };
        func();
    }, [token]);

    return <GetPassword />;
};

export default Oauth;
