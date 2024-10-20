import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostState } from "./types";

const initialState: PostState = {
  post: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Post>) {
      state.post = action.payload;
    },
    clearPost(state) {
      state.post = null;
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;

export default postSlice.reducer;
