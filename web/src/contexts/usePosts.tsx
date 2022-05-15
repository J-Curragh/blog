import { useCallback } from "react";
import PostsService from "../services/postsService";
import { Post } from "../models";
import { usePostsContext } from "./PostsCtxProviderComponent";

const usePosts = () => {

  const {
    isLoading,
    setIsLoading,
    posts,
    setPosts
  } = usePostsContext();

  const fetchPosts = useCallback(() => {
    PostsService.getPosts().then((posts: Post[]) => {
      setPosts(posts);
    });
  }, [setPosts]);

  return {
    isLoading,
    fetchPosts,
    posts
  }
}

export default usePosts;