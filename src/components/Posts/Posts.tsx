'use client';
import { useAppDispatch, useAppSelector } from '@/redux/slices/hooks';
import { selectPost } from '@/redux/slices/post';
import { Post } from '@/redux/slices/post/types';
import { getPosts } from '@/redux/thunks/post';
import Link from 'next/link';
import { useEffect } from 'react';
import { PostCard } from '../PostCard';

export const Posts = () => {
  const { posts } = useAppSelector(selectPost);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts &&
        !!posts.length &&
        posts.map((post: Post) => (
          <Link key={post.id} href={`/post/${post.id}`} passHref>
            <PostCard post={post} />
          </Link>
        ))}
    </div>
  );
};
