'use client';

import { useAppDispatch, useAppSelector } from '@/redux/slices/hooks';
import { isPostEditorMode, selectPost } from '@/redux/slices/post';
import { fetchPostById } from '@/redux/thunks/post';
import { removePost } from '@/services/posts';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AddPostModal } from '../AddPostModal';
import { Button } from '../Button';

export const PostDescription = ({ postId }: { postId: string }) => {
  const { postData: post, postEditorMode } = useAppSelector(selectPost);

  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(postId));
    }
  }, [postId, dispatch]);

  const handleDeletePost = async () => {
    if (!post || !post.id) {
      return;
    }

    try {
      await removePost(post.id);

      router.push('/');
    } catch (error) {
      console.error('Error deleting post:', error);

      const message = (error as Error).message || 'An unknown error occurred';
    }
  };

  const handleEditPostOpen = () => {
    dispatch(isPostEditorMode(true));
  };

  const handleEditPostClose = () => {
    dispatch(isPostEditorMode(false));
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-grayBg">
        {post?.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto rounded-md bg-white">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl text-left py-4">
              {post?.title}
            </h1>
            {post?.content && (
              <div
                className="mt-6 prose prose-lg max-w-none text-gray-700 md:text-lg lg:text-xl mx-auto"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
            <div className="mt-10 flex gap-4 justify-end">
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600"
                handleClick={handleEditPostOpen}
              >
                Edit
              </Button>
              <Button
                className="bg-red-600 text-white hover:bg-red-700"
                handleClick={handleDeletePost}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      {postEditorMode && (
        <AddPostModal closeModal={handleEditPostClose} postToEdit={post} />
      )}
    </div>
  );
};
