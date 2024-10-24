/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable indent */

'use client';

import { RootState } from '@/redux/store';
import { fetchPostById, getPosts } from '@/redux/thunks/post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostsState } from './types';

const initialState: PostsState = {
  posts: null,
  postData: null,
  postEditorMode: false,
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Post>) {
      state.postData = action.payload;
    },
    clearPost(state) {
      state.postData = null;
    },
    isPostEditorMode(state, action: PayloadAction<boolean>) {
      state.postEditorMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load posts';
      }),
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
