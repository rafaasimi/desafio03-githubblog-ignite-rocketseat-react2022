import styled from "styled-components";

export const PostsContainer = styled.div`
  position: relative;
  top: -5.5rem;

  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PostList = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (width < 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PostItem = styled.article`
  a {
    height: 100%;
    padding: 2rem;
    border-radius: 10px;
    background: ${(props) => props.theme["base-post"]};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${(props) => props.theme["base-label"]};
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      h2 {
        font-size: 1.25rem;
        line-height: 160%;
        color: ${(props) => props.theme["base-title"]};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      time {
        font-size: 0.875rem;
        line-height: 160%;
        color: ${(props) => props.theme["base-span"]};
        white-space: nowrap;
      }
    }
  }
`;

export const PostContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
