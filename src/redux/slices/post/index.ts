'use client';

import { RootState } from '@/redux/store';
import { fetchPostById } from '@/redux/thunks/post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from './types';

const initialState: any = {
  postData: null,
  istPostEditorMode: false,
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Post>) {
      state.post = action.payload;
    },
    clearPost(state) {
      state.post = null;
    },
    isPostEditorMode(state, action: PayloadAction<boolean>) {
      state.istPostEditorMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.loading = false;

          state.postData = action.payload;
        },
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPost, clearPost, isPostEditorMode } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
