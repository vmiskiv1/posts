export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  body: string;
  publishedAt: string;
}

export interface PostState {
  post: Post | null;
}
