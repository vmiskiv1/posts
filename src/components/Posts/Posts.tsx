'use client';
import { Post } from '@/redux/slices/post/types';
import { getPosts } from '@/services/posts';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PostCard } from '../PostCard';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <div className="py-10">
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts &&
          !!posts.length &&
          posts.map((post: Post) => (
            <Link key={post.id} href={`/post/${post.id}`} passHref>
              <PostCard post={post} />
            </Link>
          ))}
        <div>Pagination</div>
      </div>
    </div>
  );
};
