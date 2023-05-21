import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useAppDispatch } from "hooks/useAppDispatch";
/* components */
import Footer from "components/Footer";
import Header from "components/Header/Header";
import Epilogue from "pages/Epilogue/Epilogue";
import LoginPage from "pages/Login";
import MainAfterLogin from "pages/MainAfterLogin/MainAfterLogin";
import DonationPost from "pages/DonationPost/DonationPost";
import MyDonation from "pages/MyDonation/MyDonation";
import MyInterest from "pages/MyInterest/MyInterest";
import MyNotification from "pages/MyNotification/MyNotification";
import EpiloguePost from "pages/EpiloguePost/EpiloguePost";
import { fetchDonaPosts, fetchEpilPosts } from "redux/postSlice";
import PostingDonation from "pages/PostingDonation/PostingDonation";
import PostingEpilogue from "pages/PostingEpilogue/PostingEpilogue";
import MyPage from "pages/MyPage/MyPage";
import ReceiptOCR from "pages/ReceiptOCR/ReceiptOCR";
import ChargeToken from "pages/ChargeToken/ChargeToken";
import Oauth from "components/Login/Oauth";
import { fetchUserInfo } from "redux/authSlice";
import { GetKakaoUserApi } from "api/userInfo";
import { RefreshTokenApi } from "api/auth";
import CreateWallet from "utils/web3/CreateWallet";

declare global {
    interface Window {
        IMP: any;
    }
}

function App() {
    //api를 통해 post 정보를 가져와 리덕스에 저장
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchDonaPosts());
        dispatch(fetchEpilPosts());
    }, [dispatch]);

    //access token이 있는 경우, 갱신한 뒤 사용자 정보를 리덕스에 저장한다.
    useEffect(() => {
        const getUser = async () => {
            //토큰 갱신
            let token = await RefreshTokenApi();

            //사용자 정보 리덕스 저장
            let { data } = await GetKakaoUserApi({ token });
            const email = data.kakao_account.email;

            dispatch(fetchUserInfo({ email }));
        };

        const token = window.localStorage.getItem("accessToken");
        if (token) {
            getUser();
        }
    }, [dispatch]);

    return (
        <div>
            <Router>
                <GlobalStyle />
                <CreateWallet password={"hi"} />
                <Header />
                <Routes>
                    <Route path="/" element={<MainAfterLogin />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/oauth" element={<Oauth />}></Route>
                    <Route path="/epilogue" element={<Epilogue />}></Route>
                    <Route path="/post/:id" element={<DonationPost />}></Route>
                    <Route
                        path="/epilogue/post/:id"
                        element={<EpiloguePost />}
                    ></Route>
                    /* mypage */
                    <Route path="/my/:id" element={<MyPage />} />
                    <Route path="/my/donation/:id" element={<MyDonation />} />
                    <Route path="/my/interest/:id" element={<MyInterest />} />
                    <Route
                        path="/my/notification/:id"
                        element={<MyNotification />}
                    />
                    <Route
                        path="/posting/donation"
                        element={<PostingDonation />}
                    />
                    <Route
                        path="/posting/epilogue/:id"
                        element={<PostingEpilogue />}
                    />
                    <Route path="/receiptOCR/:id" element={<ReceiptOCR />} />
                    <Route path="/charge" element={<ChargeToken />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:'NanumSquareNeo';
    }
`;
