import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ViewAllApi } from "api/post";

export const fetchDonaPosts = createAsyncThunk(
    "postSlice/fetchDonaPosts",
    ViewAllApi
);

export const postSlice = createSlice({
    name: "post_data",
    initialState: {
        donationPost: [],
        epiloguePost: [],
        isLoading: false,
        error: "",
    },
    reducers: {
        setDonaPost: (state, action) => {
            state.donationPost = action.payload;
        },
        setEpilPost: (state, action) => {
            state.epiloguePost = action.payload;
        },
        clearPostdata: (state, action) => {
            state.donationPost = [];
            state.epiloguePost = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDonaPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDonaPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.donationPost = action.payload;
            })
            .addCase(fetchDonaPosts.rejected, (state, action) => {
                state.isLoading = false;
                if (action.error.message) {
                    state.error = action.error.message;
                }
            });
    },
});

export interface postType {
    post: {
        content: string;
        created_at: string;
        postId: string;
        images: string[];
        period: number;
        post_id: number;
        region: string;
        status: number;
        target_amount: number;
        title: string;
        uploader_id: number;
    };
}

export const { setDonaPost, setEpilPost, clearPostdata } = postSlice.actions;
export default postSlice.reducer;
