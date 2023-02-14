import styled from "styled-components";
import pawprint from "../assets/imgs/pawprint.png";
import google from "../assets/imgs/google.png";
import kakao from "../assets/imgs/kakao.png";
import naver from "../assets/imgs/naver.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
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

    /* 인가 코드 요청까지 구현 */
    return (
        <Container>
            <Text fontSize="50" style={{ padding: "90px" }}>
                로그인
            </Text>
            <Pawprint src={pawprint}></Pawprint>
            <Buttons>
                <Link
                    to={NAVER_AUTH_URI}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Button color="#19CE60">
                        <Img src={naver}></Img>
                        네이버로 계속하기
                    </Button>
                </Link>
                <Link
                    to={KAKAO_AUTH_URI}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Button color="#FAE100">
                        <Img src={kakao}></Img>
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
                        <Img src={google}></Img>구글로 계속하기
                    </Button>
                </Link>
            </Buttons>
        </Container>
    );
};

export default LoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
const Text = styled.text`
    font-size: ${(props) => props.fontSize}px;
`;
const Pawprint = styled.img`
    position: absolute;
    width: 75px;
    height: 75px;
    left: 58.5014vw;
    top: 200px;
    transform: rotate(13.43deg);
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 494px;
    height: 54px;
    background: ${(props) => props.color};
    border-radius: 4px;
    font-size: 14px;
`;
const Img = styled.img`
    padding-right: 25px;
`;
