import React, { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  number: number;
  title: string;
  comments: number;
  body: string;
  created_at: string;
  user: {
    login: string;
  };
  html_url: string;
}

interface PostContextType {
  posts: Post[];
}

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsContext = createContext({} as PostContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const url =
      "/repos/rafaasimi/desafio03-githubblog-ignite-rocketseat-react2022/issues";

    const response = await api.get(url);

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}
