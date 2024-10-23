import { PostDescription } from '@/components/PostDescription';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  return <PostDescription postId={params.id} />;
}
