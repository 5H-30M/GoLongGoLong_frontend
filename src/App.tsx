import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
/* components */
import Footer from "components/Common/Footer";
import Header from "components/Common/Header";
import EpiloguePage from "pages/EpiloguePage";
import LoginPage from "pages/LoginPage";
import MainAfterLoginPage from "pages/MainAfterLoginPage";
import PostPage from "pages/PostPage";
import EpiloguePostPage from "pages/EpiloguePostPage";
import MyDonationPage from "pages/MyDonationPage";

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
                        element={<EpiloguePostPage />}
                    ></Route>
                    /* mypage */
                    <Route
                        path="/my/donation"
                        element={<MyDonationPage />}
                    ></Route>
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
