import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    id: string;
  };
}

async function getPostData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    return undefined;
  }

  return response.json();
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = params;

  const post = await getPostData(id);

  if (!post) {
    notFound();
  }

  console.log(post);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
