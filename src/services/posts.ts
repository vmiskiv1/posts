import request from './request';

export const getPosts = async () => {
  const posts = await request({ endpoint: '/posts' });

  return posts;
};

export const addPost = async (body: any) => {
  const addedPost = await request({ method: 'POST', endpoint: '/posts', body });
};

export const getPostById = async (postId: string) => {
  const data = await request({ method: 'GET', endpoint: `/posts/${postId}` });

  return data;
};

export const removePost = async (postId: string) => {
  const data = await request({
    method: 'DELETE',
    endpoint: `/posts/${postId}`,
  });

  return data;
};
