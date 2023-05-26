import { LoginApi } from "api/auth";
import Spinner from "components/Spinner/Spinner";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo } from "redux/authSlice";
import Signup from "./Signup";

const Oauth = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    //1. url의 인가코드를 변수에 저장한다.
    const code = new URL(window.location.href).searchParams.get("code");

    const loginApi = async () => {
        try {
            //2. 인가코드로 access token, refresh token, userId를 받아온다.
            if (code) {
                await LoginApi({ code });
            }

            //3. 사용자 userId로 사용자 정보를 가져와 리덕스로 저장한다.
            const userId = window.localStorage.getItem("userId");
            if (userId) {
                await dispatch(fetchUserInfo(parseInt(userId)));
            }

            //4. 로그인에 성공했다면 isLoading을 true로 바꾼다.
            setIsLoading(true);
        } catch (err) {
            //5. 로그인에 실패했다면 안내 메세지 발송 후 로그인 페이지로 돌아간다.
            alert("로그인 중 오류가 발생했습니다.");
            navigate("/login");
        }
    };

    useEffect(() => {
        loginApi();
    }, []);

    // if (isLoading) {
    //     return (
    //         <div style={{ marginTop: "80px" }}>
    //             <Spinner />
    //         </div>
    //     );
    // } else {
    //     return <GetPassword />;
    // }
    return <Signup />;
};

export default Oauth;
