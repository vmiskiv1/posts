import { formatDateAndTime } from '@/utils/formattedDate';
import Image from 'next/image';
import { PostCardProps } from './types';

export const PostCard = ({ post }: PostCardProps) => {
  console.log(post);
  return (
    <div className="flex bg-white flex-col rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Image
        src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
        width={300}
        height={100}
        alt="post image"
        className="rounded-t-md"
      />
      <div className="p-4">
        <div className="text-xl font-semibold">{post.title}</div>
        <div>{post.description}</div>
        <div className="mt-10 text-xs">
          {formatDateAndTime(post.publishedAt)}
        </div>
      </div>
    </div>
  );
};
