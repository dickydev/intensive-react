import React from "react";
import { usePosts } from "../features/posts/hooks";

const PostListAxios: React.FC = () => {
  const { data, loading, error } = usePosts();
  if (loading) return <p>Loading....</p>;
  if (error) return <p style={{ color: "red" }}>Error : {error}</p>;

  return (
    <>
      <h1>PostList Axios</h1>
      <input type="text" />
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostListAxios;
