import { hitAPI } from "../../lib/axios";
import { type Post } from "../../types/post";

export async function getAllPosts(): Promise<Post[]> {
  const { data } = await hitAPI.get<Post[]>("/posts");
  return data;
}

export async function updatePost({ id }) {
  const { data } = await hitAPI.put(`/posts/${id}`);
  return data;
}
