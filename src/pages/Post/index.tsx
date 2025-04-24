import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Post, PostsContext } from "../../contexts/PostsContext";
import {
  CardContainer,
  CardHeader,
  CardInfo,
  CardSocials,
  PostContent,
  PostPageContainer,
} from "./styles";
import { ArrowUpRightFromSquare } from "../../assets/arrowUpRightFromSquare";
import { Github } from "../../assets/github";
import { Comment } from "../../assets/comment";
import { Calendar } from "../../assets/calendarDay";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft } from "../../assets/chevronLeft";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function PostPage() {
  const { fetchPostById, posts } = useContext(PostsContext);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  const { issueNumber } = useParams();

  const getIssue = useCallback(async () => {
    let issueData = posts?.find((post) => post.number === Number(issueNumber));

    if (!issueData) {
      issueData = await fetchPostById(Number(issueNumber));
    }

    setCurrentPost(issueData);
  }, [fetchPostById, posts, issueNumber]);

  useEffect(() => {
    getIssue();
  }, [getIssue]);

  return (
    <PostPageContainer>
      <CardContainer>
        <CardInfo>
          <CardHeader>
            <div>
              <Link to="/">
                <ChevronLeft /> Voltar
              </Link>
              <a href={currentPost?.html_url} target="_blank">
                Ver no Github
                <ArrowUpRightFromSquare />
              </a>
            </div>

            <h2>{currentPost?.title}</h2>
          </CardHeader>

          <CardSocials>
            <span>
              <Github />
              rafaasimi
            </span>
            <span>
              <Calendar />
              {currentPost &&
                formatDistanceToNow(new Date(currentPost?.created_at), {
                  locale: ptBR,
                  addSuffix: true,
                })}
            </span>
            <span>
              <Comment />
              {currentPost?.comments} comentários
            </span>
          </CardSocials>
        </CardInfo>
      </CardContainer>

      <PostContent>
        <Markdown remarkPlugins={[remarkGfm]}>{currentPost?.body}</Markdown>
      </PostContent>
    </PostPageContainer>
  );
}
