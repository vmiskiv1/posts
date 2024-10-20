import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { Post } from "@/redux/slices/post/types";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="bg-grayBg">
      <Container>
        <div className="grid grid-cols-4 gap-4 ">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}
