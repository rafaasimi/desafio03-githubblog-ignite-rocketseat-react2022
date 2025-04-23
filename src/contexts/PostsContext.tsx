import React, { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export interface Post {
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
  posts: Post[] | null;
  user: User | null;
  fetchPostById: (issueId: number) => Promise<Post>;
}

interface PostsProviderProps {
  children: React.ReactNode;
}

export const PostsContext = createContext({} as PostContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  async function fetchUser() {
    const url = "/users/rafaasimi";

    const response = await api.get(url);
    setUser(response.data);
  }

  async function fetchPosts() {
    const url =
      "/repos/rafaasimi/desafio03-githubblog-ignite-rocketseat-react2022/issues";

    const response = await api.get(url);

    setPosts(response.data);
  }

  async function fetchPostById(issueId: number): Promise<Post> {
    const url = `https://api.github.com/repos/rafaasimi/desafio03-githubblog-ignite-rocketseat-react2022/issues/${issueId}`;

    const response = await api.get(url);
    return response.data;
  }

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, user, fetchPostById }}>
      {children}
    </PostsContext.Provider>
  );
}
