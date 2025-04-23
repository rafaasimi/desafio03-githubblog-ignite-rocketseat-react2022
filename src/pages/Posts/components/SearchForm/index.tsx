import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  );
}
