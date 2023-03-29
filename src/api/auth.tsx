import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginApi = () => {
    let body = {
        //로그인 정보
    };

    axios
        .post("/users/login", body)
        .then((res) => {
            // 로그인 로직
        })
        .catch((err) => {
            console.log(err);
        });
};

const DeleteUserApi = () => {
    const navigate = useNavigate();
    axios
        .delete("/users")
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

export { LoginApi, DeleteUserApi };
