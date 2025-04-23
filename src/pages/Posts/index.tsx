import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer } from "./styles";

export function Posts() {
  return (
    <PostsContainer>
      <Profile />
      <SearchForm />
    </PostsContainer>
  )
}