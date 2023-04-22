import React, { useEffect } from "react";
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
import { userType, postType } from "utils/types";
import MyPage from "pages/MyPage/MyPage";

//임시 데이터
const post: postType = {
    amount: 500000,
    content: "",
    images: [
        "https://pbs.twimg.com/profile_images/1450121710674407426/SwOINBDw_400x400.jpg",
    ],
    period: 10,
    plans: {},
    target_amount: 500000,
    title: "",
    post_id: 20,
    uploader_id: -1,
    raised_people: 100,
    created_at: "2023-04-10",
    status: 4,
};
export const testUser: userType = {
    user_id: 0,
    donations: [
        { post_id: 20, donated_at: "2023-04-22", amount: 1000, trx_id: "none" },
        { post_id: 20, donated_at: "2023-04-22", amount: 1000, trx_id: "none" },
    ],
    interests: [20],
    notifications: [
        { post_id: 20, is_check: false, status: 3, tag: true },
        { post_id: 20, is_check: false, status: 4, tag: false },
    ],
    fundraisings: [post, post],
    profile_img_url:
        "https://pbs.twimg.com/profile_images/1450121710674407426/SwOINBDw_400x400.jpg",
    token_amount: 5000,
    nickname: "nyaaaa",
    sns_email: "nyaaaa@gmail.com",
    created_at: "2023-04-23",
};

function App() {
    //api를 통해 post 정보를 가져와 리덕스에 저장
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchDonaPosts());
        dispatch(fetchEpilPosts());
    }, [dispatch]);

    return (
        <div>
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<MainAfterLogin />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
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
                        path="/posting/epilogue"
                        element={<PostingEpilogue />}
                    />
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
