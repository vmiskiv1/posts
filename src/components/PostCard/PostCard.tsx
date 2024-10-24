import { formatDateAndTime } from '@/utils/formattedDate';
import Image from 'next/image';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import defaultImage from '../../../public/default-post-image.jpg';
import { PostCardProps } from './types';

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex bg-white flex-col rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer h-96">
      <Image
        src={post.imageUrl || defaultImage}
        width={300}
        height={100}
        alt="post image"
        className="rounded-t-md h-40 object-cover w-full"
      />
      <div className="flex flex-col p-4 flex-grow">
        <div className="text-xl font-semibold">
          {post.title.length > 40
            ? `${post.title.slice(0, 40)}...`
            : post.title}
        </div>
        <div className="text-gray-600 text-sm mt-2">
          {post.description.length > 80
            ? `${post.description.slice(0, 80)}...`
            : post.description}
        </div>
        <div className="mt-auto text-xs flex justify-start items-center gap-1">
          <MdOutlineCalendarMonth />
          {formatDateAndTime(post.publishedAt as string)}
        </div>
      </div>
    </div>
  );
};
