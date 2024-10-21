import request from './request';

export const getPosts = async () => {
  const posts = await request({ endpoint: '/posts' });

  return posts;
};

export const addPost = async (body: any) => {
  const addedPost = await request({ method: 'POST', endpoint: '/posts', body });

  console.log(addedPost);
};
