export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PostState {
  post: Post | null;
}
