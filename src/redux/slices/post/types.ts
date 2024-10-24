export interface Post {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string | null;
  content?: string;
  publishedAt?: string;
}
export interface PostsState {
  posts: Post[] | null;
  postData: Post | null;
  postEditorMode: boolean;
  loading: boolean;
  error: string | null;
}
