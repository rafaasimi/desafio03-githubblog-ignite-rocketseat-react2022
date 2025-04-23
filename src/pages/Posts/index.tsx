import { useContext } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostItem, PostList, PostsContainer } from "./styles";
import { PostsContext } from "../../contexts/PostsContext";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Posts() {
  const { posts } = useContext(PostsContext);

  return (
    <PostsContainer>
      <Profile />
      <SearchForm />

      <PostList>
        {posts ? (
          posts.map((post) => (
            <PostItem key={post.number}>
              <a href="www.google.com">
                <header>
                  <h2>{post.title}</h2>
                  <time title={post.created_at}>
                    {formatDistanceToNow(new Date(post.created_at), {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </time>
                </header>

                <p>{post.body}</p>
              </a>
            </PostItem>
          ))
        ) : (
          <p>Não há publicações</p>
        )}
      </PostList>
    </PostsContainer>
  );
}
