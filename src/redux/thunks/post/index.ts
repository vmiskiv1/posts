import request from '@/services/request';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (postId: string, { rejectWithValue }) => {
    try {
      const response = await request({
        endpoint: `/posts/${postId}`,
      });
      return response;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || 'Failed to fetch post',
      );
    }
  },
);

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await request({ endpoint: '/posts' });

      return response;
    } catch (error) {
      return rejectWithValue(
        (error as Error).message || 'Failed to fetch posts',
      );
    }
  },
);
