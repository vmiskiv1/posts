import request from './request';

export const getPosts = async () => {
  return await request({ endpoint: '/posts' });
};

export const addPost = async (postData: any) => {
  return await request({
    method: 'POST',
    endpoint: '/posts',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
};

export const uploadPostImage = async (file: any) => {
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

export const updatePost = async ({ postId, postData }: any) => {
  return await request({
    method: 'PATCH',
    endpoint: `/posts/${postId}`,
    body: JSON.stringify(postData),
  });
};

export const removePost = async (postId: string) => {
  return await request({
    method: 'DELETE',
    endpoint: `/posts/${postId}`,
  });
};
