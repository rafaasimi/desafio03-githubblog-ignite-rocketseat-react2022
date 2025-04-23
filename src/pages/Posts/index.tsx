import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { PostItem, PostList, PostsContainer } from "./styles";

export function Posts() {
  return (
    <PostsContainer>
      <Profile />
      <SearchForm />

      <PostList>
        <PostItem>
          <a href="www.google.com">
            <header>
              <h2>JavaScript data types and data structures</h2>
              <time title="23/04/2025">Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic.
            </p>
          </a>
        </PostItem>

        <PostItem>
          <a href="www.google.com">
            <header>
              <h2>JavaScript data types and data structures</h2>
              <time title="23/04/2025">Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic.
            </p>
          </a>
        </PostItem>

        <PostItem>
          <a href="www.google.com">
            <header>
              <h2>JavaScript data types and data structures</h2>
              <time title="23/04/2025">Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic.
            </p>
          </a>
        </PostItem>

        <PostItem>
          <a href="www.google.com">
            <header>
              <h2>JavaScript data types and data structures</h2>
              <time title="23/04/2025">Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic.
            </p>
          </a>
        </PostItem>

        <PostItem>
          <a href="www.google.com">
            <header>
              <h2>JavaScript data types and data structures</h2>
              <time title="23/04/2025">Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic.
            </p>
          </a>
        </PostItem>

        <PostItem>
          <a href="www.google.com">
            <header>
              <h2>JavaScript data types and data structures</h2>
              <time title="23/04/2025">Há 1 dia</time>
            </header>

            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic.
            </p>
          </a>
        </PostItem>
      </PostList>
    </PostsContainer>
  );
}
