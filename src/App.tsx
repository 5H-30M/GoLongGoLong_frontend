import LoginPage from "pages/LoginPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function App() {
    return (
        <div>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Routes>
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
