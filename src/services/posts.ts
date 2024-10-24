import { Post } from '@/redux/slices/post/types';
import request from './request';

export const addPost = async (postData: Post) => {
  return await request({
    method: 'POST',
    endpoint: '/posts',
    body: postData,
  });
};

export const uploadPostImage = async (file: File) => {
  const formData = new FormData();

  formData.append('image', file);

  try {
    const response = await request({
      url: process.env.NEXT_PUBLIC_IMGBB_API,
      endpoint: `/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      method: 'POST',
      body: formData,
    });

    if (!response.success) {
      throw new Error(response.message || 'Image upload failed');
    }

    return response.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getPostById = async (postId: string) => {
  return await request({ method: 'GET', endpoint: `/posts/${postId}` });
};

export const updatePost = async ({
  postId,
  postData,
}: {
  postId: string;
  postData: Post;
}) => {
  return await request({
    method: 'PATCH',
    endpoint: `/posts/${postId}`,
    body: postData,
  });
};

export const removePost = async (postId: string) => {
  return await request({
    method: 'DELETE',
    endpoint: `/posts/${postId}`,
  });
};
