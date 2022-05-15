import { Post } from "../models";
import {createContext, FC, ReactNode, useContext, useState} from "react";

interface PostsContextInterface {
  isLoading: boolean;
  setIsLoading(b: boolean): void;
  posts: Post[];
  setPosts(posts: Post[]): void;
}

const PostsContext = createContext<PostsContextInterface | undefined>(undefined);

const usePostsContext = (): PostsContextInterface => {
  const ctx = useContext(PostsContext);

  if (!ctx) {
    throw new Error(
      'usePostsContext hook must be used inside a PostsCtxProvider component'
    );
  }
  return ctx;
};

interface ProviderProps {
  children: ReactNode;
}

const PostsProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([])

  const value: PostsContextInterface = {
    isLoading,
    setIsLoading,
    posts,
    setPosts
  }

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export { PostsProvider, usePostsContext };