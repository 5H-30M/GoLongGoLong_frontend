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
import { RefreshTokenApi } from "api/auth";

declare global {
    interface Window {
        IMP: any;
    }
}

function App() {
    //임시 데이터!! 나중에 삭제!!
    window.localStorage.setItem("userId", "3");
    //api를 통해 post 정보를 가져와 리덕스에 저장
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchDonaPosts());
        dispatch(fetchEpilPosts());
        //나중에 삭제!!
        let user_id = window.localStorage.getItem("userId");
        if (user_id) {
            dispatch(fetchUserInfo(parseInt(user_id)));
        }
    }, [dispatch]);

    //userId가 있는 경우, token을 갱신한 뒤 사용자 정보를 리덕스에 저장한다.
    useEffect(() => {
        let user_id = window.localStorage.getItem("userId");

        const getUser = async (userId: number) => {
            //토큰 갱신
            await RefreshTokenApi();
            //사용자 정보 리덕스 저장
            await dispatch(fetchUserInfo(userId));
        };

        if (user_id) {
            const userId = parseInt(user_id);
            getUser(userId);
        }
    }, [dispatch]);

    return (
        <div>
            <Router>
                <GlobalStyle />
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
                    <Route path="/my" element={<MyPage />} />
                    <Route path="/my/donation" element={<MyDonation />} />
                    <Route path="/my/interest" element={<MyInterest />} />
                    <Route
                        path="/my/notification"
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
