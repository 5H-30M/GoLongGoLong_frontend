import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as postApi from "api/post";
import * as reviewApi from "api/review";

export const fetchDonaPosts = createAsyncThunk(
    "postSlice/fetchDonaPosts",
    postApi.ViewAllApi
);
export const fetchEpilPosts = createAsyncThunk(
    "postSlice/fetchEpilPosts",
    reviewApi.ViewAllApi
);

export const postSlice = createSlice({
    name: "post_data",
    initialState: {
        donationPost: [],
        epiloguePost: [],
        isLoading: false,
        error: "",
        filteredBy: "new",
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
        setFilteredBy: (state, action) => {
            state.filteredBy = action.payload;
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
            })
            .addCase(fetchEpilPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchEpilPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.epiloguePost = action.payload;
            })
            .addCase(fetchEpilPosts.rejected, (state, action) => {
                state.isLoading = false;
                if (action.error.message) {
                    state.error = action.error.message;
                }
            });
    },
});

export const { setDonaPost, setEpilPost, clearPostdata, setFilteredBy } =
    postSlice.actions;
export default postSlice.reducer;
