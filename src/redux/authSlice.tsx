import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authentication",
    initialState: {
        userToken: "",
        userData: [],
        isLogin: false,
    },
    reducers: {
        loginUser: (state, action) => {
            state.userToken = action.payload.accessToken;
            state.isLogin = true;
        },
        userInfo: (state, action) => {
            state.userData = action.payload;
        },
        clearUser: (state, action) => {
            state.userToken = "";
            state.userData = [];
            state.isLogin = false;
        },
    },
});

export const { loginUser, userInfo, clearUser } = authSlice.actions;
export default authSlice.reducer;
