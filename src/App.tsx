import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
/* components */
import Footer from "components/Footer";
import Header from "components/Header/Header";
import EpiloguePage from "pages/Epilogue/Epilogue";
import LoginPage from "pages/Login";
import MainAfterLoginPage from "pages/MainAfterLogin/MainAfterLogin";
import PostPage from "pages/DonationPost/DonationPost";
import EpiloguePostPage from "pages/EpiloguePost/EpiloguePost";
import MyDonationPage from "pages/MyDonation/MyDonation";
import MyInterestPage from "pages/MyInterest/MyInterest";
import MyNotificationPage from "pages/MyNotification/MyNotification";
import EpiloguePost from "pages/EpiloguePost/EpiloguePost";

function App() {
    return (
        <div>
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<MainAfterLoginPage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/epilogue" element={<EpiloguePage />}></Route>
                    <Route path="/post" element={<PostPage />}></Route>
                    <Route
                        path="/epilogue/post"
                        element={<EpiloguePost />}
                    ></Route>
                    <Route
                        path="/epilogue/post"
                        element={<EpiloguePostPage />}
                    />
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
