import { useContext } from "react";
import { PostsContext } from "../../../../contexts/PostsContext";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  const { posts } = useContext(PostsContext);

  function formatPostCount() {
    const count = posts?.length;

    if (!count) {
      return;
    }

    if (count === 1) {
      return `${count} publicação`;
    } else if (count > 1) {
      return `${count} publicações`;
    } else {
      return "não há publicações";
    }
  }

  return (
    <SearchFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>{formatPostCount()}</span>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  );
}
