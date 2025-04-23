import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Post, PostsContext } from "../../contexts/PostsContext";
import {
  CardContainer,
  CardHeader,
  CardInfo,
  CardSocials,
  PostPageContainer,
} from "./styles";
import { ArrowUpRightFromSquare } from "../../assets/arrowUpRightFromSquare";
import { Github } from "../../assets/github";
import { Comment } from "../../assets/comment";
import { Calendar } from "../../assets/calendarDay";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft } from "../../assets/chevronLeft";

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
              <a href="https://github.com/rafaasimi" target="_blank">
                Github
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
              {currentPost && formatDistanceToNow(new Date(currentPost?.created_at), {
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
    </PostPageContainer>
  );
}
