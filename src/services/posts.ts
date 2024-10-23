import request from './request';

export const getPosts = async () => {
  const posts = await request({ endpoint: '/posts' });

  return posts;
};

export const addPost = async (postData: any) => {
  const addedPost = await request({
    method: 'POST',
    endpoint: '/posts',
    body: postData,
  });
};

export const getPostById = async (postId: string) => {
  const post = await request({ method: 'GET', endpoint: `/posts/${postId}` });

  return post;
};

export const updatePost = async ({ postId, postData }: any) => {
  const updatedPost = await request({
    method: 'PATCH',
    endpoint: `/posts/${postId}`,
    body: postData,
  });

  return updatedPost;
};

export const removePost = async (postId: string) => {
  const data = await request({
    method: 'DELETE',
    endpoint: `/posts/${postId}`,
  });

  return data;
};
