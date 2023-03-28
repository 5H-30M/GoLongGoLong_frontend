import google from "../../assets/imgs/google.png";
import kakao from "../../assets/imgs/kakao.png";
import naver from "../../assets/imgs/naver.png";
import { Link } from "react-router-dom";
import { Container, Pawprint, Buttons, Button } from "./Style";

/* kakao */
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth";
const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

/* naver */
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_REDIRECT_URI = "http://localhost:3000/naver/callback";
const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=state`;

/* google */
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = "http://localhost:3000/google/callback";
const GOOGLE_AUTH_URI = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;

const SocialLogin = () => {
    /* 인가 코드 요청까지 구현 */
    return (
        <Container>
            <text className="title">로그인</text>
            <Pawprint />
            <Buttons>
                <Link
                    to={NAVER_AUTH_URI}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Button color="#19CE60">
                        <img className="icon" src={naver}></img>
                        네이버로 계속하기
                    </Button>
                </Link>
                <Link
                    to={KAKAO_AUTH_URI}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Button color="#FAE100">
                        <img className="icon" src={kakao}></img>
                        카카오톡으로 계속하기
                    </Button>
                </Link>
                <Link
                    to={GOOGLE_AUTH_URI}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Button
                        color="transparent"
                        style={{ border: "1px solid rgba(15, 15, 15, 0.15)" }}
                    >
                        <img className="icon" src={google}></img>구글로 계속하기
                    </Button>
                </Link>
            </Buttons>
        </Container>
    );
};

export default SocialLogin;
