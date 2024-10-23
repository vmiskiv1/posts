'use client';

import { useAppDispatch, useAppSelector } from '@/redux/slices/hooks';
import { isPostEditorMode, selectPost } from '@/redux/slices/post';
import { fetchPostById } from '@/redux/thunks/post';
import { removePost } from '@/services/posts';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import defaultImage from '../../../public/default-post-image.jpg';
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
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto border border-gray-300 shadow-md rounded-md">
          <Image
            width={400}
            height={400}
            src={post.imageUrl || defaultImage}
            alt={post.title}
            className="w-full h-auto object-cover rounded-t-md shadow-md"
          />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl text-center">
              {post.title}
            </h1>
            <hr className="border-t border-gray-300 my-4" />{' '}
            {post?.content && (
              <div
                className="prose prose-lg max-w-none text-gray-700 md:text-lg lg:text-xl mx-auto"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex gap-4 justify-end">
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
    </>
  );
};
