'use client';

import { PostDescription } from '@/components/PostDescription';
import { useAppDispatch } from '@/redux/slices/hooks';
import { fetchPostById } from '@/redux/thunks/post';
import { useEffect, useState } from 'react';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const dispatch = useAppDispatch();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error || !post) {
  //   return <div>Post not found</div>;
  // }

  return <>{isClient && <PostDescription />}</>;
}
