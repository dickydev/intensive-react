import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllPosts, updatePost } from "./api";
import { type Post } from "../../types/post";

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    staleTime: 1000 * 60,
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {},
    onError: () => {},
  });
};
