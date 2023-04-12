import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useAppDispatch } from "hooks/useAppDispatch";
/* components */
import Footer from "components/Footer";
import Header from "components/Header/Header";
import EpiloguePage from "pages/Epilogue/Epilogue";
import LoginPage from "pages/Login";
import MainAfterLoginPage from "pages/MainAfterLogin/MainAfterLogin";
import PostPage from "pages/DonationPost/DonationPost";
import MyDonationPage from "pages/MyDonation/MyDonation";
import MyInterestPage from "pages/MyInterest/MyInterest";
import MyNotificationPage from "pages/MyNotification/MyNotification";
import EpiloguePost from "pages/EpiloguePost/EpiloguePost";
import { fetchDonaPosts, fetchEpilPosts } from "redux/postSlice";

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
                    <Route path="/" element={<MainAfterLoginPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/epilogue" element={<EpiloguePage />}></Route>
                    <Route path="/post/:id" element={<PostPage />}></Route>
                    <Route
                        path="/epilogue/post/:id"
                        element={<EpiloguePost />}
                    ></Route>
                    /* mypage */
                    <Route path="/my/donation" element={<MyDonationPage />} />
                    <Route path="/my/interest" element={<MyInterestPage />} />
                    <Route
                        path="/my/notification"
                        element={<MyNotificationPage />}
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
