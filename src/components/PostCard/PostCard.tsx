import Image from "next/image";
import { PostCardProps } from "./types";

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex bg-white flex-col rounded-md">
      <Image
        src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
        width={300}
        height={100}
        alt="post image"
      />
      <div className="p-4">
        <div className="text-xl font-semibold">{post.title}</div>
        <div>{post.body}</div>
      </div>
    </div>
  );
};
