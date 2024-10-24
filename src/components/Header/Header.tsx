'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { AddPostModal } from '../AddPostModal';
import { Button } from '../Button';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="fixed z-50 p-2 shadow-md flex justify-between container mx-auto px-40 bg-white">
      <div className="flex justify-center items-center max-md:w-full">
        <Link href="/" className="">
          <h1 className="text-2xl max-sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            BlogApp
          </h1>
        </Link>
      </div>

      <Button
        handleClick={handleOpenModal}
        className="max-md:fixed bottom-10 z-10 right-6 bg-blue-600 hover:bg-blue-700 text-white max-md:rounded-full w-20 h-20 justify-center md:rounded-md md:w-auto md:h-auto opacity-90"
      >
        <span className="max-md:hidden font-semibold">Add a post</span>
        <span className="md:hidden">
          <FaPlus size={38} />
        </span>
      </Button>
      {isModalOpen && <AddPostModal closeModal={handleCloseModal} />}
    </div>
  );
};
