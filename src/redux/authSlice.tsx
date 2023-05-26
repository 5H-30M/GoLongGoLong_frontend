import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ViewApi } from "api/member";
import { userType_new } from "utils/types";

export const fetchUserInfo = createAsyncThunk(
    "authslice/fetchUserInfo",
    (userId: number) => ViewApi(userId)
);
interface stateType {
    userData?: userType_new;
    error: string;
    isLogin: boolean;
}
const initialState: stateType = {
    error: "",
    isLogin: false,
};
export const authSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
        loginUser: (state, action) => {
            state.userData = action.payload;
            state.isLogin = true;
        },
        userInfo: (state, action) => {
            state.userData = action.payload;
        },
        clearUser: (state, action) => {
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state) => {})
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isLogin = true;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                if (action.error.message) {
                    state.error = action.error.message;
                    throw state.error;
                }
            });
    },
});

export const { loginUser, userInfo, clearUser } = authSlice.actions;
export default authSlice.reducer;
