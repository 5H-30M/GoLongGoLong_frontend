import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ViewApi } from "api/userInfo";
import { postType, userType } from "utils/types";

export const fetchUserInfo = createAsyncThunk(
    "authslice/fetchUserInfo",
    ViewApi //이메일로 유저 정보 가져오는 api. 지금은 임시로 아무거나 넣었다.
);
interface stateType {
    userData: userType;
    error: string;
    isLogin: boolean;
}
//임시 데이터
export const testPost: postType = {
    amount: 500000,
    content: "",
    images: [
        "https://pbs.twimg.com/profile_images/1450121710674407426/SwOINBDw_400x400.jpg",
    ],
    period: 10,
    plans: {},
    target_amount: 500000,
    title: "",
    post_id: 59,
    uploader_id: -1,
    raised_people: 100,
    created_at: "2023-04-10",
    status: 0,
    region: "seoul",
};
export const testUser: userType = {
    user_id: 0,
    donations: [
        {
            post_id: 59,
            donated_at: "2023-05-19",
            amount: 5000,
            trx_id: ["none"],
        },
    ],
    interests: [59],
    notifications: [
        { post_id: 59, is_check: false, status: 3, tag: true },
        { post_id: 59, is_check: false, status: 4, tag: false },
    ],
    fundraisings: [testPost, testPost],
    profile_img_url:
        "https://pbs.twimg.com/profile_images/1450121710674407426/SwOINBDw_400x400.jpg",
    token_amount: 5000,
    nickname: "고냥이",
    sns_email: "nyaaaa@gmail.com",
    created_at: "2023-04-23",
    region: "seoul",
};
const initialState: stateType = {
    //임시 데이터 testuser 사용
    userData: testUser,
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
