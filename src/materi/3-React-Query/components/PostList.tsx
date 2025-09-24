import { usePosts } from "../features/posts/hooks";
import React from "react";

const PostListRQ = () => {
  const { data, isLoading } = usePosts();
  if (isLoading) return <p>Loading.......</p>;
  return (
    <React.Fragment>
      <h1>Postlist React Query</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PostListRQ;
