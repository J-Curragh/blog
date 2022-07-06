import { useCallback } from 'react';
import PostsService from '../services/postsService';
import { Post } from '../types';
import { usePostsContext } from './PostsCtxProviderComponent';

const usePosts = () => {
  const { isLoading, setIsLoading, posts, setPosts } = usePostsContext();

  const fetchPosts = useCallback(() => {
    PostsService.getPosts().then((posts: Post[]) => {
      setPosts(posts);
    });
  }, [setPosts]);

  const fetchRecentPosts = useCallback(() => {
    PostsService.getPosts(true).then((posts: Post[]) => {
      setPosts(posts);
    });
  }, [setPosts]);

  return {
    isLoading,
    fetchPosts,
    fetchRecentPosts,
    posts,
  };
};

export default usePosts;
