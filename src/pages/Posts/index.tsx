import { useContext } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostContent, PostItem, PostList, PostsContainer } from "./styles";
import { PostsContext } from "../../contexts/PostsContext";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function PostsPage() {
  const { posts } = useContext(PostsContext);

  return (
    <PostsContainer>
      <Profile />
      <SearchForm />

      <PostList>
        {posts ? (
          posts.map((post) => (
            <PostItem key={post.number}>
              <Link to={`/${post.number}`}>
                <header>
                  <h2>{post.title}</h2>
                  <time title={post.created_at}>
                    {formatDistanceToNow(new Date(post.created_at), {
                      locale: ptBR,
                      addSuffix: true,
                    })}
                  </time>
                </header>

                <PostContent>
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      allowedElements ={["p"]}
                      unwrapDisallowed
                    >
                      {post.body}
                    </Markdown>
                </PostContent>
              </Link>
            </PostItem>
          ))
        ) : (
          <p>Não há publicações</p>
        )}
      </PostList>
    </PostsContainer>
  );
}
