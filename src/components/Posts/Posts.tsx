import { Post } from '@/redux/slices/post/types';
import { getPosts } from '@/services/posts';
import { useEffect, useState } from 'react';
import { AddPostModal } from '../AddPostModal';
import { Button } from '../Button';
import { PostCard } from '../PostCard';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <div className="py-10">
      <Button
        handleClick={handleOpenModal}
        className="hover:bg-blue-600 text-white"
      >
        Add a post
      </Button>
      <div className="py-10 grid grid-cols-4 gap-4">
        {!!posts &&
          !!posts.length &&
          posts.map((post: Post) => <PostCard key={post.id} post={post} />)}
      </div>
      {isModalOpen && <AddPostModal closeModal={handleCloseModal} />}
    </div>
  );
};
